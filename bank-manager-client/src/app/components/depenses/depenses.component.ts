import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { DepensesService } from "../../services/depenses.service";
import DateUtilities from "../../utils/DateUtilities";
import PriceUtilities from "../../utils/PriceUtilities";
import { BeneficiaireService } from "../../services/beneficiaire.service";
import { CategorieService } from "../../services/categorie.service";
import { Categories } from "../../interfaces/categories";
import { Beneficiaires } from "../../interfaces/beneficiaires";
import { Depenses, DepensesDisplay } from "../../interfaces/depenses";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { forkJoin, map, switchMap } from "rxjs";

@Component({
    selector: 'app-depenses',
    templateUrl: './depenses.component.html',
    styleUrls: ['./depenses.component.scss']
})
export class DepensesComponent implements AfterViewInit {
    isLoading = true;
    depenses: Depenses[] = [];
    depensesDisplay: Array<DepensesDisplay> = [];
    beneficiaires: Beneficiaires[] = [];
    categories: Categories[] = [];

    displayedColumns: string[] = [ 'ID', 'Montant', 'Date', 'Beneficiaire', 'Categorie', 'Description' ];
    dataSource: MatTableDataSource<DepensesDisplay>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public depensesService: DepensesService, public beneficiareService: BeneficiaireService, public categorieService: CategorieService) {
        this.depensesService.getAll().subscribe({
            next: (res: any) => {
                res.forEach((element: Depenses) => {
                    this.depensesDisplay.push({
                        "ID": element.ID,
                        "montant": PriceUtilities.priceFormat(element.montant),
                        "Date": DateUtilities.dateFormat(element.Date),
                        "Beneficiaire": element.IDBeneficiaire.toString(),
                        "Categorie": element.IDCategorie.toString(),
                        "Description": element.Description
                    })
                    this.depenses.push(element);
                });
            },
            error: (err) => {
                this.isLoading = true;
                console.log(err);
            },
            complete: () => {
                this.dataSource = new MatTableDataSource<DepensesDisplay>(this.depensesDisplay)
                this.isLoading = false;
            }
        });
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    async getBeneficiaire(IDBeneficiaire: number): Promise<string> {
        let nom = "";
        this.beneficiareService.getID(IDBeneficiaire).subscribe({
            next: (res: any) => {
                nom = res.nom;
            },
            error: (err) => {
                console.log(err)
            }
        });
        return nom;
    }

    async getCategorie(IDCategorie: number): Promise<string> {
        let nom = "";
        this.categorieService.getID(IDCategorie).subscribe({
            next: (res: any) => {
                nom = res.nom;
            },
            error: (err) => {
                console.log(err)
            }
        });
        return nom;
    }
}

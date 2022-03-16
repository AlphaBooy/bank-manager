import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { RevenusService } from "../../services/revenus.service";
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

@Component({
  selector: 'app-revenus',
  templateUrl: './revenus.component.html',
  styleUrls: ['./revenus.component.scss']
})
export class RevenusComponent implements AfterViewInit {
    isLoading = true;
    depenses: Depenses[] = [];
    depensesDisplay: Array<DepensesDisplay> = [];
    beneficiaires: Beneficiaires[] = [];
    categories: Categories[] = [];

    displayedColumns: string[] = [ 'ID', 'Montant', 'Date', 'Créditeur', 'Categorie', 'Description' ];
    dataSource: MatTableDataSource<DepensesDisplay>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    refresh: boolean = false;

    constructor(public revenusService: RevenusService, public beneficiareService: BeneficiaireService, public categorieService: CategorieService) {
        this.revenusService.getAll().subscribe({
            next: (res: any) => {
                res.forEach((element: Depenses) => {
                    this.depensesDisplay.push({
                        "ID": element.ID,
                        "montant": element.montant,
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
                this.dataSource = new MatTableDataSource<DepensesDisplay>(this.depensesDisplay);
                this.ngAfterViewInit();
                this.isLoading = false;
            }
        });
    }

    ngAfterViewInit() {
        for (let i = 0; i < this.dataSource.data.length; i++) {
            this.beneficiareService.getID(parseInt(this.dataSource.data[i].Beneficiaire)).subscribe({
                next: (res: any) => { this.dataSource.data[i].Beneficiaire = res.nom; }
            });

            this.categorieService.getID((parseInt(this.dataSource.data[i].Categorie))).subscribe({
                next: (res: any) => { this.dataSource.data[i].Categorie = res.nom; }
            });
        }
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.refresh = true;
        window.dispatchEvent(new Event('resize'))
    }
}


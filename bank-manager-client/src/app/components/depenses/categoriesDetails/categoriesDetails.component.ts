import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Depenses, DepensesDisplay} from "../../../interfaces/depenses";
import {Beneficiaires} from "../../../interfaces/beneficiaires";
import {Categories} from "../../../interfaces/categories";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {DepensesService} from "../../../services/depenses.service";
import {BeneficiaireService} from "../../../services/beneficiaire.service";
import {CategorieService} from "../../../services/categorie.service";
import DateUtilities from "../../../utils/DateUtilities";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-categoriesDetails',
  templateUrl: './categoriesDetails.component.html',
  styleUrls: ['./categoriesDetails.component.scss']
})
export class CategoriesDetailsComponent implements AfterViewInit {
    isLoading = true;
    depenses: Depenses[] = [];
    depensesDisplay: Array<DepensesDisplay> = [];
    beneficiaires: Beneficiaires[] = [];
    categories: Categories[] = [];

    displayedColumns: string[] = [ 'ID', 'Montant', 'Date', 'Beneficiaire', 'Description' ];
    dataSource: MatTableDataSource<DepensesDisplay>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    refresh: boolean = false;
    private categorieRequested: number;

    constructor(public depensesService: DepensesService, public beneficiareService: BeneficiaireService, public categorieService: CategorieService, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.categorieRequested = params['id'];
        });
        this.depensesService.getDepenseCategorie(this.categorieRequested).subscribe({
            next: (res: any) => {
                res.forEach((element: Depenses) => {
                    this.depensesDisplay.push({
                        "ID": element.ID,
                        "montant": element.montant,
                        "Date": DateUtilities.dateFormat(element.Date),
                        "Beneficiaire": element.IDBeneficiaire.toString(),
                        "Categorie": "",
                        "CategorieIcon": "",
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
        }
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.refresh = true;
        window.dispatchEvent(new Event('resize'))
    }
}

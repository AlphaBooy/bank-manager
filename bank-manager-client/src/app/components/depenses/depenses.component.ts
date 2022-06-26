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
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-depenses',
    templateUrl: './depenses.component.html',
    styleUrls: ['./depenses.component.scss']
})
export class DepensesComponent implements AfterViewInit, OnInit {
    isLoading: boolean = true;
    depenses: Depenses[] = [];
    depensesDisplay: Array<DepensesDisplay> = [];
    beneficiaires: Beneficiaires[] = [];
    categories: Categories[] = [];
    todaysDate = new Date()
    selectedYear: number

    displayedColumns: string[] = [ 'ID', 'Montant', 'Date', 'Beneficiaire', 'Categorie', 'Description', 'Obligatoire' ];
    dataSource: MatTableDataSource<DepensesDisplay>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    YearSelect = new FormControl();

    constructor(public depensesService: DepensesService, public beneficiareService: BeneficiaireService, public categorieService: CategorieService) {}

    ngOnInit() {
        this.selectedYear = this.todaysDate.getFullYear()
        this.YearSelect.setValue(this.selectedYear)
        this.changeYear()
    }

    ngAfterViewInit() {
        if (this.dataSource === undefined) {
            this.isLoading = true;
        } else {
            this.isLoading = false;
            /* For each elements in the array */
            for (let i = 0; i < this.dataSource.data.length; i++) {
                /* Parse the beneficiaire table to match each id to a name which is clearer to the user */
                this.beneficiareService.getID(parseInt(this.dataSource.data[i].Beneficiaire)).subscribe({
                    next: (res: any) => {
                        this.dataSource.data[i].Beneficiaire = res.nom;
                    }
                });
                /* PArse the catecories table to match each id to a name which is clearer to the user */
                this.categorieService.getID((parseInt(this.dataSource.data[i].Categorie))).subscribe({
                    next: (res: any) => {
                        this.dataSource.data[i].Categorie = res.nom;
                        this.dataSource.data[i].CategorieIcon = res.Icon;
                    }
                });
            }
            /* Add pages, filters... to the array of depenses */
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            window.dispatchEvent(new Event('resize'))
        }
    }

    changeYear() {
        this.selectedYear = this.YearSelect.value;
        this.generateDisplay(this.selectedYear);
    }

    generateDisplay(year: any) {
        /* Reset the display and the depenses array so it can be filled depending of the year selected (or current) */
        this.depensesDisplay = []
        this.depenses = []
        /* Get all depenses and sort it by date */
        this.depensesService.getAll().subscribe({
            next: (res: any) => {
                res.forEach((element: Depenses) => {
                    /* If the element year is equal to the date selected by the user : */
                    if (parseInt(element.Date.toString().split('-')[0]) === year) {
                        element.Description = element.Description == null || element.Description == "null" ? "" : element.Description;
                        /* Make every format method for each fields in the array */
                        this.depensesDisplay.push({
                            "ID": element.ID,
                            "montant": element.montant,
                            "Date": DateUtilities.dateFormat(element.Date),
                            "Beneficiaire": element.IDBeneficiaire.toString(),
                            "Categorie": element.IDCategorie.toString(),
                            "CategorieIcon": "",
                            "Description": element.Description
                        })
                        /* Push the depenses object (non formatted) in the dedicated array */
                        this.depenses.push(element);
                    }
                });
            },
            error: (err) => {
                /* If we detect an error, keep the page loading and display an error within the console */
                this.isLoading = true;
                console.log(err);
            },
            complete: () => {
                /* Fill the array with the depenses formatted */
                this.dataSource = new MatTableDataSource<DepensesDisplay>(this.depensesDisplay);
                this.ngAfterViewInit();
                /* Stop the loading */
                this.isLoading = false;
            }
        });
    }
}

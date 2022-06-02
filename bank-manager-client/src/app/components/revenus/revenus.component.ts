import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { RevenusService } from "../../services/revenus.service";
import DateUtilities from "../../utils/DateUtilities";
import PriceUtilities from "../../utils/PriceUtilities";
import { BeneficiaireService } from "../../services/beneficiaire.service";
import { CategorieService } from "../../services/categorie.service";
import { Categories } from "../../interfaces/categories";
import { Beneficiaires } from "../../interfaces/beneficiaires";
import { Revenus, RevenusDisplay } from "../../interfaces/revenus";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import {CrediteurService} from "../../services/crediteur.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-revenus',
  templateUrl: './revenus.component.html',
  styleUrls: ['./revenus.component.scss']
})
export class RevenusComponent implements AfterViewInit {
    isLoading = true;
    depenses: Revenus[] = [];
    revenusDisplay: Array<RevenusDisplay> = [];
    beneficiaires: Beneficiaires[] = [];
    categories: Categories[] = [];
    todaysDate = new Date()
    selectedYear: number

    displayedColumns: string[] = [ 'ID', 'Montant', 'Date', 'Crediteur', 'Categorie', 'Description' ];
    dataSource: MatTableDataSource<RevenusDisplay>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    refresh: boolean = false;
    YearSelect = new FormControl();

    constructor(public revenusService: RevenusService, public beneficiareService: BeneficiaireService, public crediteurService: CrediteurService, public categorieService: CategorieService) {    }

    ngOnInit() {
        this.selectedYear = this.todaysDate.getFullYear()
        this.YearSelect.setValue(this.selectedYear)
        this.changeYear()
    }

    ngAfterViewInit() {
        for (let i = 0; i < this.dataSource.data.length; i++) {
            this.crediteurService.getID(parseInt(this.dataSource.data[i].Crediteur)).subscribe({
                next: (res: any) => { this.dataSource.data[i].Crediteur = res.nom; }
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

    changeYear() {
        this.selectedYear = this.YearSelect.value;
        this.generateDisplay(this.selectedYear);
    }

    generateDisplay(year: any) {
        this.revenusService.getAll().subscribe({
            next: (res: any) => {
                res.forEach((element: Revenus) => {
                    this.revenusDisplay.push({
                        "ID": element.ID,
                        "Montant": element.montant,
                        "Date": DateUtilities.dateFormat(element.Date),
                        "Crediteur": element.IDCrediteur.toString(),
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
                this.dataSource = new MatTableDataSource<RevenusDisplay>(this.revenusDisplay);
                this.ngAfterViewInit();
                this.isLoading = false;
            }
        });
    }
}


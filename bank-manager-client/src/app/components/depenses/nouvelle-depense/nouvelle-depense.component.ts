import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MatCalendar} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from '@angular/material/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {FormControl} from "@angular/forms";
import {BeneficiaireService} from "../../../services/beneficiaire.service";
import {CategorieService} from "../../../services/categorie.service";
import {Beneficiaires} from "../../../interfaces/beneficiaires";
import {Categories} from "../../../interfaces/categories";

@Component({
  selector: 'app-nouvelle-depense',
  templateUrl: './nouvelle-depense.component.html',
  styleUrls: ['./nouvelle-depense.component.scss']
})
export class NouvelleDepenseComponent implements OnInit {
    selected: Date | null;

    beneficiaireList = new FormControl();
    categorieList = new FormControl();
    obligatoireList = new FormControl();
    beneficiaires: Beneficiaires[];
    categories: Categories[];

    constructor(public beneficiaireService: BeneficiaireService, public categorieService: CategorieService) { }

    ngOnInit() {
        this.beneficiaires = [];
        this.categories = [];
        this.beneficiaireService.getAll().subscribe({
            next: (res: any) => {
                res.forEach((element: Beneficiaires) => {
                    this.beneficiaires.push(element);
                })
            }
        });

        this.categorieService.getAll().subscribe({
            next: (res: any) => {
                res.forEach((element: Categories) => {
                    this.categories.push(element);
                })
            }
        });
    }
}

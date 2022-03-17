import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Beneficiaires} from "../../interfaces/beneficiaires";
import {BeneficiaireService} from "../../services/beneficiaire.service";
import {DepensesDisplay} from "../../interfaces/depenses";

interface BeneficiairesDisplay {
    "IDBeneficiaire": number,
    "nom": string,
    "TOTAL": number
}

@Component({
  selector: 'app-beneficiaires',
  templateUrl: './beneficiaires.component.html',
  styleUrls: ['./beneficiaires.component.scss']
})
export class BeneficiairesComponent implements OnInit, AfterViewInit {

    displayedColumns: string[] = [ 'ID', 'Beneficiaire', 'Montant' ];
    dataSource: MatTableDataSource<BeneficiairesDisplay>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    beneficiaireDisplay : Array<BeneficiairesDisplay> = [];
    isLoading: boolean = true;

  constructor(private beneficiaireService: BeneficiaireService) { }

  ngOnInit(): void {
      this.beneficiaireService.getAllTotal().subscribe({
          next: (res: any) => {
              res.forEach((element:BeneficiairesDisplay) => {
                  this.beneficiaireDisplay.push({
                      "IDBeneficiaire": element.IDBeneficiaire,
                      "nom": element.nom,
                      "TOTAL": element.TOTAL
                  });
              });
          },
          error: (err) => {
              /* If we detect an error, keep the page loading and display an error within the console */
              this.isLoading = true;
              console.log(err);
          },
          complete: () => {
              this.dataSource = new MatTableDataSource<BeneficiairesDisplay>(this.beneficiaireDisplay);
              this.ngAfterViewInit();
              /* Stop the loading */
              this.isLoading = false;
          }
      });
  }

    ngAfterViewInit() {
        if (this.dataSource === undefined) {
            this.isLoading = true;
        } else {
            /* Add pages, filters... to the array of depenses */
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            window.dispatchEvent(new Event('resize'));
        }
    }
}

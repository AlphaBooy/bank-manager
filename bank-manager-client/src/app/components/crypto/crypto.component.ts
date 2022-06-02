import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Depenses, DepensesDisplay} from "../../interfaces/depenses";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {FormControl} from "@angular/forms";
import {Cryptos} from "../../interfaces/cryptos";
import {CryptosService} from "../../services/cryptos.service";
import DateUtilities from "../../utils/DateUtilities";

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {

    isLoading: boolean = true;
    cryptos: Cryptos[] = [];

    displayedColumns: string[] = [ 'ID', 'Crypto', 'ACRO','Montant EURO', 'Montant Crypto','Taux de conversion', 'Sous Type', 'Date' ];
    dataSource: MatTableDataSource<Cryptos>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    YearSelect = new FormControl();

  constructor(public cryptosService: CryptosService) { }

  ngOnInit(): void {
      /* Get all cryptos and sort it by date */
      this.cryptosService.getAll().subscribe({
          next: (res: any) => {
              res.forEach((element: Cryptos) => {
                  this.cryptos.push(element);
              });
          },
          error: (err) => {
              /* If we detect an error, keep the page loading and display an error within the console */
              this.isLoading = true;
              console.log(err);
          },
          complete: () => {
              /* Fill the array with the cryptos formatted */
              this.dataSource = new MatTableDataSource<Cryptos>(this.cryptos);
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
            this.isLoading = false;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            window.dispatchEvent(new Event('resize'))
        }
    }

}

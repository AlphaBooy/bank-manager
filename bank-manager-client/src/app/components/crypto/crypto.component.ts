import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Depenses, DepensesDisplay} from "../../interfaces/depenses";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {FormControl} from "@angular/forms";
import {Cryptos, CryptosDisplay} from "../../interfaces/cryptos";
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
    cryptosDisplay: CryptosDisplay[] = [];

    cryptoAccounts = [
        {"name": "CRONOS", "acro": "CRO", "value": 0, "spendings": 0, "valueEUR": 0, "idGecko": "crypto-com-chain"},
        {"name": "BITCOIN", "acro": "BTC", "value": 0, "spendings": 0, "valueEUR": 0, "idGecko": "bitcoin"},
        {"name": "APECOIN", "acro": "APE", "value": 0, "spendings": 0, "valueEUR": 0, "idGecko": "apecoin"},
        {"name": "AVALANCHE", "acro": "AVAX", "value": 0, "spendings": 0, "valueEUR": 0, "idGecko": "avalanche-2"}
    ]

    displayedColumns: string[] = [ 'ID', 'Crypto', 'ACRO','Montant EURO', 'Montant Crypto','Taux de conversion', 'Sous Type', 'Date' ];
    dataSource: MatTableDataSource<CryptosDisplay>;

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
                  this.cryptosDisplay.push({
                      "ID": element.ID,
                      "nomCrypto": element.nomCrypto,
                      "acronymeCrypto": element.acronymeCrypto,
                      "montantEUR": element.montantEUR,
                      "montantCrypto": element.montantCrypto,
                      "tauxEUR": element.tauxEUR,
                      "type": element.type,
                      "sousType": element.sousType,
                      "date": DateUtilities.dateFormat(element.date)
                  });
              });
          },
          error: (err) => {
              /* If we detect an error, keep the page loading and display an error within the console */
              this.isLoading = true;
              console.log(err);
          },
          complete: () => {
              /* Fill the array with the cryptos formatted */
              this.dataSource = new MatTableDataSource<CryptosDisplay>(this.cryptosDisplay);
              this.ngAfterViewInit();
              /* Stop the loading */
              this.isLoading = false;
          }
      });
      for (let i = 0; i < this.cryptoAccounts.length; i++) {
          this.cryptosService.getTotalCrypto(this.cryptoAccounts[i].name).subscribe({
              next: (res: any) => {
                  this.cryptoAccounts[i].value = res[0]["TOTAL"]
              },
              error: (err) => {
                  console.log(err);
              }
          });
          this.cryptosService.getDepensesCrypto(this.cryptoAccounts[i].name).subscribe({
              next: (res: any) => {
                  this.cryptoAccounts[i].spendings = res[0]["TOTAL"]
              },
              error: (err) => {
                  console.log(err);
              }
          });
          this.cryptosService.getCurrentCryptoValue(this.cryptoAccounts[i].idGecko).subscribe({
              next: (res: any) => {
                  let taux = parseFloat(res[this.cryptoAccounts[i].idGecko]["eur"])
                  this.cryptoAccounts[i].valueEUR = this.cryptoAccounts[i].value * taux;
                  console.log(this.cryptoAccounts[i].valueEUR);
              },
              error: (err) => {
                  console.log(err);
              }
          });
      }
  }

    ngAfterViewInit() {
      console.log(this.dataSource)
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

import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CryptosService} from "../../services/cryptos.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit, AfterViewInit {
    selectedYear: number = 2022;
    cryptoInfos: any[] = []

  constructor(public cryptosService: CryptosService) { }

  ngOnInit(): void {
      this.cryptosService.getAllByCrypto().subscribe({
          next: (res: any) => {
              res.forEach((element: any) => {
                  this.cryptoInfos.push(element);
              });
              for (let i = 0; i < this.cryptoInfos.length; i++) {
                  this.cryptosService.getCurrentCryptoValue(this.cryptoInfos[i].idGecko).subscribe({
                      next: (res: any) => {

                      },
                      error: (err) => {
                          console.log(err);
                      }
                  });
              }
          },
          error: (err) => {
              console.log(err);
          }
      });
  }

  ngAfterViewInit() {
      window.dispatchEvent(new Event('resize'));
  }

}

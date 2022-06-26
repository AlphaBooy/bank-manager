import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartComponent} from "ng-apexcharts";
import {Router} from "@angular/router";
import {ChartOptions} from "../categories-donut-chart/categories-donut-chart.component";
import {CryptosService} from "../../../services/cryptos.service";
import {cryptoByType} from "../../../interfaces/cryptos";

@Component({
  selector: 'app-cryptos-donut-chart',
  templateUrl: './cryptos-donut-chart.component.html',
  styleUrls: ['./cryptos-donut-chart.component.scss']
})
export class CryptosDonutChartComponent implements OnInit {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions!: Partial<ChartOptions> | any;

    constructor(public cryptoService: CryptosService, public router: Router) {
        this.chartOptions = {
            series: [],
            chart: {
                width: 500,
                type: "pie"
            },
            labels: [],
            legend: {
                labels: {
                    colors: "#FF5722",
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 350
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                colors: "#FF5722",
                            }
                        }
                    }
                }
            ]
        };
    }

    ngOnInit(): void {
        this.getCryptoPerNames()
    }

    ngOnChanges() {
        this.getCryptoPerNames()
    }

    getCryptoPerNames() {
        this.chartOptions.series = [];
        this.chartOptions.labels = [];
        this.cryptoService.getAllByCrypto().subscribe((res: any) => {
            console.log(res)
            res.forEach((element: cryptoByType) => {
                this.chartOptions.series.push(element.TOTALEUR);
                this.chartOptions.labels.push(element.nomCrypto + " (" + element.acronymeCrypto + ")");
            });
        });
    }
}

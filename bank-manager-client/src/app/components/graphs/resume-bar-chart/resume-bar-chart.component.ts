import {Component, Input, OnInit, ViewChild} from '@angular/core';

import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexTitleSubtitle, ApexXAxis, ApexFill } from "ng-apexcharts";
import {DepensesCategorie, DepensesMois} from "../../../interfaces/depenses";
import {Revenus, RevenusMois} from "../../../interfaces/revenus";
import {DepensesService} from "../../../services/depenses.service";
import {RevenusService} from "../../../services/revenus.service";
import {range} from "rxjs";

export type ChartOptions = { series: ApexAxisChartSeries; chart: ApexChart; dataLabels: ApexDataLabels; plotOptions: ApexPlotOptions; yaxis: ApexYAxis; xaxis: ApexXAxis; colors: string[]; title: ApexTitleSubtitle; };

@Component({
    selector: 'app-resume-bar-chart',
    templateUrl: './resume-bar-chart.component.html',
    styleUrls: ['./resume-bar-chart.component.scss']
})
export class ResumeBarChartComponent implements OnInit {
    @Input() year: number;
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions!: Partial<ChartOptions> | any;
    date: Date = new Date();

    revenusMois: number[] = [];
    depensesMois: number[] = [];
    data: number[] = [0,0,0,0,0,0,0,0,0,0,0,0];

    constructor(public depensesService: DepensesService, public revenuService: RevenusService) {
        this.chartOptions = {
            series: [],
            chart: { height: 350, type: "bar" },
            plotOptions: { bar: { dataLabels: { position: "top" } } },
            dataLabels: {
                enabled: true,
                offsetY: -20,
                style: { fontSize: "12px", colors: ["#FF5722"] }
            },

            xaxis: {
                categories: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"],
                position: "top",
                labels: { offsetY: -18, style: { colors: "#FF5722" } },
                axisBorder: { show: false },
                axisTicks: { show: false },
                crosshairs: {
                    fill: {
                        type: "gradient",
                        gradient: {
                            colorFrom: "#FFC107",
                            colorTo: "#FF5722",
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5
                        }
                    }
                },
                tooltip: { enabled: true, offsetY: -35 }
            },
            colors: ["#FF0000","#00FF00","#FFC107"],
            legend: {
                labels: {
                    colors: ["#FF0000","#00FF00","#FFC107"],
                    useSeriesColors: true
                }
            },
            yaxis: {
                axisBorder: { show: false },
                axisTicks: { show: false },
                labels: { show: false }
            }
        };
    }

    ngOnInit(): void {
        //this.getFinalArray()
    }

    ngOnChanges() {
        this.getFinalArray()
    }

    sleep(ms: number) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    async getDepensesByMounth() {
        this.depensesService.getDepenseByMois(this.year).subscribe(async (res: any) => {
                // Fetch all elements of the request to initiate expenses array
                res.forEach((element: DepensesMois) => {
                    this.depensesMois[element.MOIS - 1] = element.TOTAL;
                });
                // Add elements to the array if the year is not complete, so we can display it correctly anyway
                while (this.depensesMois.length < 12) {
                    this.depensesMois.push(0);
                }
            },
            (error: any) => {
                console.log(error);
            });
    }

    async getRevenusByMounth() {
        await this.revenuService.getRevenusByMois(this.year).subscribe(async (res: any) => {
            // Fetch all elements of the request to initiate incomes array
            res.forEach((element: RevenusMois) => {
                this.revenusMois[element.MOIS - 1] = element.TOTAL;
            });
            // Add elements to the array if the year is not complete, so we can display it correctly anyway
            while (this.revenusMois.length < 12) {
                this.revenusMois.push(0);
            }
        },
        (error: any) => {
            console.log(error);
        });
    }


    async getFinalArray() {
        this.data = [0,0,0,0,0,0,0,0,0,0,0,0]
        this.chartOptions.series = [{ name: "Depenses / Mois", data: this.data }];
        await this.getDepensesByMounth();
        await this.getRevenusByMounth();

        // We wait for a given time so the arrays have enough time to get built and can be used for
        await this.sleep(1000);

        for (let i = 0; i < this.depensesMois.length && i < this.revenusMois.length
                       && this.depensesMois[i] != undefined && this.revenusMois[i] != undefined; i++) {
            this.data[i] = this.revenusMois[i] - this.depensesMois[i];
            this.data[i] = Number(this.data[i].toFixed(2))
        }

        this.chartOptions.series.push({ name: "Dépenses", data: this.depensesMois });
        this.chartOptions.series.push({ name: "Revenus", data: this.revenusMois });
        this.chartOptions.series.push({ name: "Résumé", data: this.data });
        //this.chartOptions.series.pop();
        this.chartOptions.series.shift();

        // We wait another delay time, so we can refresh the page and display our array
        await this.sleep(500);
        window.dispatchEvent(new Event('resize'));
    }
}

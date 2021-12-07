import {Component, OnInit, ViewChild} from '@angular/core';

import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexTitleSubtitle, ApexXAxis, ApexFill } from "ng-apexcharts";
import {DepensesCategorie, DepensesMois} from "../../../interfaces/depenses";
import {DepensesService} from "../../../services/depenses.service";
import {range} from "rxjs";

export type ChartOptions = { series: ApexAxisChartSeries; chart: ApexChart; dataLabels: ApexDataLabels; plotOptions: ApexPlotOptions; yaxis: ApexYAxis; xaxis: ApexXAxis; colors: string[]; title: ApexTitleSubtitle; };

@Component({
    selector: 'app-depenses-bar-chart',
    templateUrl: './depenses-bar-chart.component.html',
    styleUrls: ['./depenses-bar-chart.component.scss']
})
export class DepensesBarChartComponent implements OnInit {
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions!: Partial<ChartOptions> | any;
    date: Date = new Date();
    data: number[] = [0,0,0,0,0,0,0,0,0,0,0,0];

    constructor(public depensesService: DepensesService) {
        this.chartOptions = {
            series: [{ name: "Depenses / Mois", data: [] }],
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
            colors: ["#FFC107"],
            yaxis: {
                axisBorder: { show: false },
                axisTicks: { show: false },
                labels: { show: false, }
            },
            title: {
                text: "Progression des dépenses en " + this.date.getFullYear(),
                offsetY: 325,
                align: "center",
                style: {
                    color: "#FFC107"
                }
            }
        };
    }

    ngOnInit(): void {
        this.depensesService.getDepenseByMois().subscribe((res: any) => {
            res.forEach((element: DepensesMois) => {
                this.data[element.MOIS] = element.TOTAL;
            });
            this.chartOptions.series.push({ name: "Depenses / Mois", data: this.data });
        });
    }

}

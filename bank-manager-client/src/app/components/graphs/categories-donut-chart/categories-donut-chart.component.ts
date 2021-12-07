import { Component, OnInit, ViewChild } from '@angular/core';
import {ApexNonAxisChartSeries, ApexResponsive, ApexChart, ChartComponent, ApexLegend} from "ng-apexcharts";
import {CategorieService} from "../../../services/categorie.service";
import {DepensesService} from "../../../services/depenses.service";
import {DepensesCategorie} from "../../../interfaces/depenses";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    legend: ApexLegend
    labels: any;
};

@Component({
    selector: 'app-categories-donut-chart',
    templateUrl: './categories-donut-chart.component.html',
    styleUrls: ['./categories-donut-chart.component.scss']
})
export class CategoriesDonutChartComponent implements OnInit {
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions!: Partial<ChartOptions> | any;

    constructor(public categorieService: CategorieService, public depensesService: DepensesService) {
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
                            width: 200
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
        this.depensesService.getDepenseByCategorie().subscribe((res: any) => {
            res.forEach((element: DepensesCategorie) => {
                this.chartOptions.series.push(element.TOTAL);
                this.chartOptions.labels.push(element.nom);
            });
        });
    }

}

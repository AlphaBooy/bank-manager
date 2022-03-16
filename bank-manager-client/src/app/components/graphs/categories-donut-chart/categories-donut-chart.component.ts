import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ApexNonAxisChartSeries, ApexResponsive, ApexChart, ChartComponent, ApexLegend} from "ng-apexcharts";
import {CategorieService} from "../../../services/categorie.service";
import {DepensesService} from "../../../services/depenses.service";
import {DepensesCategorie} from "../../../interfaces/depenses";
import { Router } from "@angular/router"

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
    @Input() input: boolean;
    @Input() year: number;
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions!: Partial<ChartOptions> | any;
    public indexToID: number[];

    constructor(public categorieService: CategorieService, public depensesService: DepensesService, public router: Router) {
        this.chartOptions = {
            series: [],
            chart: {
                width: 500,
                type: "pie",
                events: {
                    dataPointSelection: function(event: any, chartContext: any, config: any) {
                        document.location.href = "depenses/categories?id=" + (chartContext.w.config.labels[config.dataPointIndex]).split(" ")[0];
                    }
                }
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
        this.getDepensesPerCategories()
    }

    ngOnChanges() {
        //console.log(this.input);
        this.getDepensesPerCategories()
    }

    getDepensesPerCategories() {
        this.chartOptions.series = [];
        this.chartOptions.labels = [];
        this.depensesService.getDepenseByCategorie(this.year).subscribe((res: any) => {
            res.forEach((element: DepensesCategorie) => {
                this.chartOptions.series.push(element.TOTAL);
                this.chartOptions.labels.push(element.ID + " " + element.nom);
            });
        });
    }
}

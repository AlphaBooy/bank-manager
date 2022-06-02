import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ApexNonAxisChartSeries, ApexResponsive, ApexChart, ChartComponent, ApexLegend} from "ng-apexcharts";
import {DepensesService} from "../../../services/depenses.service";
import { Router } from "@angular/router"
import {BeneficiaireService} from "../../../services/beneficiaire.service";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    legend: ApexLegend
    labels: any;
};

interface BeneficiairesDisplay {
    "IDBeneficiaire": number,
    "nom": string,
    "TOTAL": number
}

@Component({
  selector: 'app-beneficiaire-donut-chart',
  templateUrl: './beneficiaire-donut-chart.component.html',
  styleUrls: ['./beneficiaire-donut-chart.component.scss']
})

export class BeneficiaireDonutChartComponent implements OnInit {
    @Input() input: boolean;
    @ViewChild("chart") chart: ChartComponent;
    public chartOptions!: Partial<ChartOptions> | any;

    constructor(public beneficiaireService: BeneficiaireService, public depensesService: DepensesService, public router: Router) {
        this.chartOptions = {
            series: [],
            chart: {
                width: 500,
                type: "pie",
                events: {
                    dataPointSelection: function(event: any, chartContext: any, config: any) {
                        document.location.href = "depenses/beneficiaires?id=" + (chartContext.w.config.labels[config.dataPointIndex]).split(" ")[0];
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
        //this.getBeneficiairesPerCategories()
    }

    ngOnChanges() {
        this.getBeneficiairesPerCategories()
    }

    getBeneficiairesPerCategories() {
        this.chartOptions.series = [];
        this.chartOptions.labels = [];
        this.beneficiaireService.getAllTotal().subscribe((res: any) => {
            res.forEach((element: BeneficiairesDisplay) => {
                this.chartOptions.series.push(element.TOTAL);
                this.chartOptions.labels.push(element.IDBeneficiaire + " " + element.nom);
            });
        });
    }
}


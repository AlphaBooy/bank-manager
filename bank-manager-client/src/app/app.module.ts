import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { FilDArianeComponent } from './components/fil-d-ariane/fil-d-ariane.component';

import { BreadcrumbModule } from 'xng-breadcrumb';
import { HttpClientModule } from '@angular/common/http';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RevenusComponent } from './components/revenus/revenus.component';
import { DepensesComponent } from './components/depenses/depenses.component';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { NgApexchartsModule } from "ng-apexcharts";
import { CategoriesDonutChartComponent } from './components/graphs/categories-donut-chart/categories-donut-chart.component';
import { DepensesBarChartComponent } from './components/graphs/depenses-bar-chart/depenses-bar-chart.component';
import { CategoriesComponent } from './components/depenses/categories/categories.component';
import { NouvelleDepenseComponent } from './components/depenses/nouvelle-depense/nouvelle-depense.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import { CrediteursComponent } from './components/depenses/crediteurs/crediteurs.component';
import { BeneficiairesComponent } from './components/beneficiaires/beneficiaires.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FilDArianeComponent,
    RevenusComponent,
    DepensesComponent,
    CategoriesDonutChartComponent,
    DepensesBarChartComponent,
    CategoriesComponent,
    NouvelleDepenseComponent,
    CrediteursComponent,
    BeneficiairesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BreadcrumbModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatSelectModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatInputModule,
        MatProgressSpinnerModule,
        NgApexchartsModule,
        ReactiveFormsModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

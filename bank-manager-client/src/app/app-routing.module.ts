import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from "./components/accueil/accueil.component";
import { DepensesComponent } from "./components/depenses/depenses.component";
import { RevenusComponent } from "./components/revenus/revenus.component";
import {CategoriesComponent} from "./components/depenses/categories/categories.component";

const routes: Routes = [
  { path: '',                   component: AccueilComponent,    data: { breadcrumb: { label: "Accueil" ,    info: "home" }}},
  { path: 'home',               component: AccueilComponent,    data: { breadcrumb: { label: "Accueil" ,    info: "home" }}},
  { path: 'depenses',           component: DepensesComponent,   data: { breadcrumb: { label: "Dépenses" ,   info: "credit_card" }}},
  { path: 'depenses/categories', component: CategoriesComponent, data: { breadcrumb: { label: "Catégorie" ,  info: "pie_chart" }}},
  { path: 'revenus',            component: RevenusComponent,    data: { breadcrumb: { label: "Revenus" ,    info: "monetization_on" }}}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

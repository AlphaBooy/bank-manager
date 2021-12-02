import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from "./components/accueil/accueil.component";

const routes: Routes = [
  { path: '', component: AccueilComponent, data: { breadcrumb: { label: "Accueil" , info: "home" }}}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

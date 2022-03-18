import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from "./components/accueil/accueil.component";
import { DepensesComponent } from "./components/depenses/depenses.component";
import { RevenusComponent } from "./components/revenus/revenus.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { NouvelleDepenseComponent } from "./components/depenses/nouvelle-depense/nouvelle-depense.component";
import { CrediteursComponent } from "./components/crediteurs/crediteurs.component";
import { BeneficiairesComponent } from "./components/beneficiaires/beneficiaires.component";
import { BeneficiairesDetailsComponent }  from "./components/depenses/beneficiairesDetails/beneficiairesDetails.component";

const routes: Routes = [
    {
        path: '',
        component: AccueilComponent,
        data: {
            breadcrumb: {
                label: "Accueil",
                info: "home"
            }
        }
    },
    {
        path: 'home',
        component: AccueilComponent,
        data: {
            breadcrumb: {
                label: "Accueil",
                info: "home"
            }
        }
    },
    {
        path: 'depenses',
        component: DepensesComponent,
        data: {
            breadcrumb: {
                label: "Dépenses",
                info: "credit_card"
            }
        }
    },
    {
        path: 'depenses/categoriesDetails',
        component: CategoriesComponent,
        data: {
            breadcrumb: {
                label: "Catégorie",
                info: "pie_chart"
            }
        }
    },
    {
        path: 'depenses/beneficiaires',
        component: BeneficiairesDetailsComponent,
        data: {
            breadcrumb: {
                label: "Bénéficiaires",
                info: "meeting_room"
            }
        }
    },
    {
        path: 'depenses/new',
        component: NouvelleDepenseComponent,
        data: {
            breadcrumb: {
                label: "Nouvelle Dépense",
                info: "library_add"
            }
        }
    },
    {
        path: 'revenus',
        component: RevenusComponent,
        data: {
            breadcrumb: {
                label: "Revenus",
                info: "monetization_on"
            }
        }
    },
    {
        path: 'categories',
        component: CategoriesComponent,
        data: {
            breadcrumb: {
                label: "Catégories",
                info: "donut_small"
            }
        }
    },
    {
        path: 'crediteurs',
        component: CrediteursComponent,
        data: {
            breadcrumb: {
                label: "Créditeurs",
                info: "beach_access"
            }
        }
    },
    {
        path: 'beneficiaires',
        component: BeneficiairesComponent,
        data: {
            breadcrumb: {
                label: "Bénéficiaires",
                info: "meeting_room"
            }
        }
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

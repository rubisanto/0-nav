import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/pages/contact/contact.component';
import { AccueilComponent } from './home/accueil/accueil.component';
import { PageNotFoundComponent } from './page-not-found/pages/page-not-found/page-not-found.component';
import { ProductsListComponent } from './shop/pages/products-list/products-list.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  {path: 'contact', component: AccueilComponent},
  {path: 'shop', component: ProductsListComponent},
  // page not found
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

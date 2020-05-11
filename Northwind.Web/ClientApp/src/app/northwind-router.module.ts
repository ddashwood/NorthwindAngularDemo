import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './northwind/ui/product-list/product-list.component';
import { ProductDetailsComponent } from './northwind/ui/product-details/product-details.component';
import { CustomerListComponent } from './northwind/ui/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './northwind/ui/customer-details/customer-details.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: ProductListComponent.routePath, component: ProductListComponent },
      { path: ProductListComponent.routePath + '/:id', component: ProductDetailsComponent },
      { path: CustomerListComponent.routePath, component: CustomerListComponent },
      { path: CustomerListComponent.routePath + '/:id', component: CustomerDetailsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class NorthwindRouterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSharedModule } from '../../ui-shared/ui-shared.module';
import { FormsModule } from '@angular/forms';
import { DataModule } from '../data/data.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';


@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent, CustomerListComponent, CustomerDetailsComponent],
  imports: [
    CommonModule,
    UiSharedModule,
    DataModule,
    FormsModule,
    RouterModule
  ]
})
export class UiModule { }

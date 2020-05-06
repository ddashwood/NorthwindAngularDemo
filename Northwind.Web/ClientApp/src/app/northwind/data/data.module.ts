import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDataService } from './product-data.service';
import { CustomerDataService } from './customer-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ProductDataService, CustomerDataService]
})
export class DataModule {
}

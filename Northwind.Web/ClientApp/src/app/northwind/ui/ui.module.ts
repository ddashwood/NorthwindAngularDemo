import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { UiSharedModule } from '../../ui-shared/ui-shared.module';
import { FormsModule } from '@angular/forms';
import { DataModule } from '../data/data.module';


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    UiSharedModule,
    DataModule,
    FormsModule
  ]
})
export class UiModule { }

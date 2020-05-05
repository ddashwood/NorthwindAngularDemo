import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class NorthwindModule { }

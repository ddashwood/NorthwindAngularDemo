import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrGridViewComponent } from './list-or-grid-view/list-or-grid-view.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListOrGridViewComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListOrGridViewComponent
  ]
})
export class SharedModule { }

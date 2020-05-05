import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrGridViewComponent } from './list-or-grid-view/list-or-grid-view.component';
import { FormsModule } from '@angular/forms';
import { PageSelectorComponent } from './page-selector/page-selector.component';



@NgModule({
  declarations: [ListOrGridViewComponent, PageSelectorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListOrGridViewComponent,
    PageSelectorComponent
  ]
})
export class SharedModule { }

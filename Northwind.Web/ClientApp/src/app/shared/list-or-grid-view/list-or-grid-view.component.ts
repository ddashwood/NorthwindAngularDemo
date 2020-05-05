import { Component, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'list-or-grid-view',
  templateUrl: './list-or-grid-view.component.html',
  styleUrls: ['./list-or-grid-view.component.css']
})
export class ListOrGridViewComponent {

  constructor() { }

  @Input()
  public items: object[];

  //@ContentChild(TemplateRef, { read: false, static: false })
  @ContentChild('showListItem', { read: false, static: false })
  listItemTemplate: TemplateRef<any>;

  @ContentChild('showGridItem', { read: false, static: false })
  gridItemTemplate: TemplateRef<any>;

  @ContentChild('showOptions', { read: false, static: false })
  optionsTemplate: TemplateRef<any>;

  public grid: boolean;

  setGrid(event: MouseEvent, grid: boolean): void {
    this.grid = grid;
    (<HTMLButtonElement>event.target).blur();
  }
}

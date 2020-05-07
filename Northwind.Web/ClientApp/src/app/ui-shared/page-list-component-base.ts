// This class is intended to be extended by components representing a paged list
// It contains some useful methods for managing the current page, etc:

// changePage(), changePageSize() - these could be bound to the view's controls
//     for changing page and page size
// load() - this should be overriden by the component to load the data

import { PageData } from "./page-selector/page-selector.component";
import { OnInit } from "@angular/core";

export class PagedListComponentBase implements OnInit {
  ngOnInit(): void {
    this.load();
  }
  public changePage(page: number): void {
    this.page = page;
    this.load();
  }

  public changePageSize(pageData: PageData): void {
    this.page = pageData.page;
    this.pageSize = pageData.pageSize;
    this.load();
  }

  public load(): void {
  }

  page: number = 1;
  pageSize: number = 10;
  maxPage: number;
}

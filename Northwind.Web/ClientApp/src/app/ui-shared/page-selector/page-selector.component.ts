import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-selector',
  templateUrl: './page-selector.component.html',
  styleUrls: ['./page-selector.component.css']
})
export class PageSelectorComponent implements OnInit {
  @Input()
  page: number;

  @Input()
  maxPage: number;

  @Input()
  pageSize: number;
  oldPageSize: number;

  @Output()
  onPageChange = new EventEmitter<number>();

  @Output()
  onPageSizeChange = new EventEmitter<PageData>();

  ngOnInit(): void {
    this.oldPageSize = this.pageSize;
  }

  public setPage(page: number) {
    this.page = page;
    this.onPageChange.emit(page);
  }

  public setPageSize() {
    // Whatever is the first item on the page right now, ensure
    // that we choose the correct page with the new page size to include
    // that item.
    let firstItem = (this.page - 1) * this.oldPageSize;
    let newPage = Math.floor(firstItem / this.pageSize) + 1;

    this.onPageSizeChange.emit({ page: newPage, pageSize: this.pageSize });
    this.oldPageSize = this.pageSize;
  }
}

export class PageData {
  public page: number;
  public pageSize: number;
}

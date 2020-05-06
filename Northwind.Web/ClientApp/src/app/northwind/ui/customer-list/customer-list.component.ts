import { Component, OnInit, Inject } from '@angular/core';
import { CustomerDataService, Customer } from '../../data/customer-data.service';
import { PageData } from '../../../ui-shared/page-selector/page-selector.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public customers: Customer[];

  constructor(private data: CustomerDataService) {
  }

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
    this.data.loadAll(this.page, this.pageSize, results => {
      this.customers = results.data;
      this.maxPage = results.maxPage;
    });
  }

  page: number = 1;
  pageSize: number = 10;
  maxPage: number;
}



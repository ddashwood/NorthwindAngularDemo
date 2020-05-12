import { Component } from '@angular/core';
import { CustomerDataService, Customer } from '../../data/customer-data.service';
import { PagedListComponentBase } from '../../../ui-shared/page-list-component-base';
import { northwindRoutesNames } from '../../../northwind-routes.names';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent extends PagedListComponentBase {
  routePath = '/' + northwindRoutesNames.CUSTOMERS;

  public customers: Customer[];

  constructor(private data: CustomerDataService) {
    super();
  }

  public load(): void {
    this.data.loadAll(this.page, this.pageSize, results => {
      this.customers = results.data;
      this.maxPage = results.maxPage;
    });
  }
}



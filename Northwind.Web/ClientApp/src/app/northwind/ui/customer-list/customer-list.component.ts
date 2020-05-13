import { Component } from '@angular/core';
import { CustomerDataService, Customer } from '../../data/customer-data.service';
import { PagedListComponentBase } from '../../../ui-shared/paged-list-component-base';
import { northwindRoutesNames } from '../../../northwind-routes.names';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent extends PagedListComponentBase {
  routePath = '/' + northwindRoutesNames.CUSTOMERS;

  public customers$: Observable<Customer[]>;

  constructor(private data: CustomerDataService) {
    super();
  }

  public load(): void {
    let results = this.data.loadAll(this.page, this.pageSize);

    this.customers$ = results.pipe(map(r => r.data));
    results.subscribe(r => this.maxPage = r.maxPage);
  }
}



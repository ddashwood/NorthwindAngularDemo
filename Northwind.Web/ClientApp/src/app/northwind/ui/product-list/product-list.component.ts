import { Component } from '@angular/core';
import { ProductDataService, Product } from '../../data/product-data.service';
import { PagedListComponentBase } from '../../../ui-shared/paged-list-component-base';
import { northwindRoutesNames } from '../../../northwind-routes.names';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends PagedListComponentBase {
  routePath = '/' + northwindRoutesNames.PRODUCTS;

  public products$: Observable<Product[]>;

  constructor(private data: ProductDataService) {
    super();
  }

  public load(): void {
    let results = this.data.loadAll(this.page, this.pageSize);

    this.products$ = results.pipe(map(r => r.data));
    results.subscribe(r => this.maxPage = r.maxPage);
  }
}



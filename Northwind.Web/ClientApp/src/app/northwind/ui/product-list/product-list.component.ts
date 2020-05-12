import { Component } from '@angular/core';
import { ProductDataService, Product } from '../../data/product-data.service';
import { PagedListComponentBase } from '../../../ui-shared/page-list-component-base';
import { northwindRoutesNames } from '../../../northwind-routes.names';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends PagedListComponentBase {
  routePath = '/' + northwindRoutesNames.PRODUCTS;

  public products: Product[];

  constructor(private data: ProductDataService) {
    super();
  }

  public load(): void {
    this.data.loadAll(this.page, this.pageSize, results => {
      this.products = results.data;
      this.maxPage = results.maxPage;
    });
  }
}



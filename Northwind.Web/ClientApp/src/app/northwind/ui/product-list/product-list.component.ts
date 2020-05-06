import { Component, OnInit, Inject } from '@angular/core';
import { ProductsDataService, Product } from '../../data/products-data.service';
import { PageData } from '../../../ui-shared/page-selector/page-selector.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Product[];

  constructor(private data : ProductsDataService) {
  }

  ngOnInit(): void {
    this.load();
  }

  public changePage(page: number) : void {
    this.page = page;
    this.load();
  }

  public changePageSize(pageData: PageData): void {
    this.page = pageData.page;
    this.pageSize = pageData.pageSize;
    this.load();
  }

  public load(): void {
    this.data.load(this.page, this.pageSize, results => {
      this.products = results.data;
      this.maxPage = results.maxPage;
    });
  }

  page: number = 1;
  pageSize: number = 10;
  maxPage: number;
}



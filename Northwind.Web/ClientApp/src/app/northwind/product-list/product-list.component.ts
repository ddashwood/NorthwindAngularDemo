import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageData } from '../../shared/page-selector/page-selector.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Product[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
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
    let url = this.baseUrl + `api/product?${encodeURIComponent('page')}=${encodeURIComponent(this.page)}` +
      `&${encodeURIComponent('pageSize')}=${encodeURIComponent(this.pageSize)}`;

    this.http.get<PagedResults<Product>>(url).subscribe(result => {
      this.products = result.data;
      this.maxPage = result.maxPage;
    }, error => console.error(error));
  }

  private page: number = 1;
  private pageSize: number = 10;
  private maxPage: number;
}

interface Product {
  productId: number;
  productName: string;
  unitPrice: number | null;
}
interface PagedResults<TDto> {
  pageNumber: number;
  pageSize: number;
  maxPage: number;

  data: TDto[];
}

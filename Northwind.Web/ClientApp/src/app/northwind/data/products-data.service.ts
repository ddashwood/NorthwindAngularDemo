import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagedResults } from './PagedResults';

@Injectable()
export class ProductsDataService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public load(page: number, pageSize: number, complete: (result: PagedResults<Product>) => void): void {
    let url = this.baseUrl + `api/product?${encodeURIComponent('page')}=${encodeURIComponent(page)}` +
      `&${encodeURIComponent('pageSize')}=${encodeURIComponent(pageSize)}`;

    this.http.get<PagedResults<Product>>(url).subscribe(result => {
      complete(result);
    }, error => console.error(error));
  }

}


export interface Product {
  productId: number;
  productName: string;
  unitPrice: number | null;
}

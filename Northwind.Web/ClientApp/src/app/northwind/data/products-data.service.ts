import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagedResults } from './PagedResults';

@Injectable()
export class ProductsDataService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public loadAll(page: number, pageSize: number, complete: (result: PagedResults<Product>) => void): void {
    let url = this.baseUrl + `api/product?${encodeURIComponent('page')}=${encodeURIComponent(page)}` +
      `&${encodeURIComponent('pageSize')}=${encodeURIComponent(pageSize)}`;

    this.http.get<PagedResults<Product>>(url).subscribe(result => {
      complete(result);
    }, error => console.error(error));
  }

  public loadSingle(id: number, complete: (product: Product) => void): void {
    let url = this.baseUrl + `api/product/${encodeURIComponent(id)}`

    this.http.get<Product>(url).subscribe(result => {
      complete(result);
    }, error => console.error(error));
  }
}


export interface Product {
  id: number;
  productName: string;
  supplierId: number | null;
  supplierName: string | null;
  categoryId: number | null;
  categoryName: string | null;
  quantityPerUnit: string;
  unitPrice: number | null;
  unitsInStock: number | null;
  unitsOnOrder: number | null;
  reorderLevel: number | null;
  discontinued: boolean;
}

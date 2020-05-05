import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public products: Product[];
  
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.load();
  }

  public load(): void {
    let url = this.baseUrl + `api/product?${encodeURIComponent('page')}=${encodeURIComponent(this.page)}` +
      `&${encodeURIComponent('pageSize')}=${encodeURIComponent(this.pageSize)}`;
    this.http.get<Product[]>(url).subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }

  public page: number = 1;
  public pageSize: number = 10;
}

interface Product {
  productId: number;
  productName: string;
  unitPrice: number | null;
}

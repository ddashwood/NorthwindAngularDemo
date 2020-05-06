import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataServiceBase } from './data-service-base';

@Injectable()
export class ProductDataService extends DataServiceBase<Product> {
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    super(http, baseUrl, "product")
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

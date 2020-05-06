import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataServiceBase } from './data-service-base';

@Injectable()
export class CustomerDataService extends DataServiceBase<Customer> {
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    super(http, baseUrl, "customer")
  }
}

export interface Customer {
  id: string;
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  phone: string;
  fax: string;
}

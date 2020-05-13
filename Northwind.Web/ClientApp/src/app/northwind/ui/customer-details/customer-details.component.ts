import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerDataService, Customer } from '../../data/customer-data.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private data: CustomerDataService) { }

  id: string;
  customer$: Observable<Customer>;
  paramsSubscription: Subscription;

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.customer$ = this.data.loadSingle(this.id);
    });  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}

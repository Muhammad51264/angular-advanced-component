import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customer-details',
  template: ` <p>Customer No : {{customer.customerNo}}</p>
  <p>Name        : <input [(ngModel)]="customer.name"></p>
  <p>Address     : <input [(ngModel)]="customer.address"></p>
  <p>city     : <input [(ngModel)]="customer.city"></p>
  <p>state     : <input [(ngModel)]="customer.state"></p>
  <p>country     : <input [(ngModel)]="customer.country"></p>
   
  <button (click)="update()">Update</button>`,
  styles: ``,
})
export class CustomerDetailsComponent {
  @Input() customer: Customer = new Customer;

  @Output() customerChange: EventEmitter<Customer> = new EventEmitter<
    Customer
  >();

  update() {
    this.customerChange.emit(this.customer);
  }
}

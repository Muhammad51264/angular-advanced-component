import { Component } from '@angular/core';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customer-list-component',
  template: `
<h2>List of Customers</h2>
 
 <table class='table'>
   <thead>
     <tr>
       <th>No</th>
       <th>Name</th>
       <th>Address</th>
       <th>City</th>
       <th>State</th>
       <th>Country</th>
       <th>Edit</th>
     </tr>
   </thead>
   <tbody>
     <tr *ngFor="let customer of customers;">
       <td>{{customer.customerNo}}</td>
       <td>{{customer.name}}</td>
       <td>{{customer.address}}</td>
       <td>{{customer.city}}</td>
       <td>{{customer.state}}</td>
       <td>{{customer.country}}</td>
       <td><button (click)="showDetails(customer)">Edit</button></td>
     </tr>
   </tbody>
 </table>
  
 <h3>Details</h3>
 <app-customer-details [customer]="selectedCustomer" (customerChange)="update($event)"></app-customer-details>
  `,
  styles: ``
})
export class CustomerListComponentComponent {

  customers: Customer[] = [
 
    {customerNo: 1, name: 'Rahuld Dravid', address: '', city: 'Banglaore', state: 'Karnataka', country: 'India'},
    {customerNo: 2, name: 'Sachin Tendulkar', address: '', city: 'Mumbai', state: 'Maharastra', country: 'India'},
    {customerNo: 3, name: 'Saurrav Ganguly', address: '', city: 'Kolkata', state: 'West Bengal', country: 'India'},
    {customerNo: 4, name: 'Mahendra Singh Dhoni', address: '', city: 'Ranchi', state: 'Bihar', country: 'India'},
    {customerNo: 5, name: 'Virat Kohli', address: '', city: 'Delhi', state: 'Delhi', country: 'India'},
 
  ]

  selectedCustomer:Customer = new Customer();

  showDetails(customer:Customer) {
    this.selectedCustomer=Object.assign({},customer)
  }
  
  update(customer:Customer) {
    console.log(customer)
    let cust:any=this.customers.find(e => e.customerNo==customer.customerNo);
    Object.assign(cust,customer)
    alert("Customer Saved")
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  template: `
<h1>{{title}}</h1>
 
 <p>
  <label for="firstName">First Name</label>
  <input (keyup)="0" type="text" #firstName id="firstName">
 </p>
  
 <p>
  <label for="lastName">Last Name</label>
  <input (keyup)="0" type="text" #lastName id="lastName">
 </p>
  
 <b>Welcome {{firstName.value}} {{lastName.value}} </b>
  `,
  styles: ``
})
export class TemplateVariableComponent {
  title="Template Variable"
}

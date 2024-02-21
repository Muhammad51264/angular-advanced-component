import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FancyBtnComponent } from './fancy-btn/fancy-btn.component';
import { CardComponent } from './card/card.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponentComponent } from './customer-list-component/customer-list-component.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    FancyBtnComponent,
    CardComponent,
    CustomerDetailsComponent,
    CustomerListComponentComponent,
    TemplateVariableComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

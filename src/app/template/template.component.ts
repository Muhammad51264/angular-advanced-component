import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template',
  template: `
    <h1>ng-template & TemplateRef</h1>

    <h2>Using the ngTemplateOutlet</h2>

    <ng-container *ngTemplateOutlet="sayHelloTemplate">
      This text is not displayed
    </ng-container>

    <ng-template #sayHelloTemplate>
      <p>Say Hello</p>
    </ng-template>
  `,
  styles: ``,
})
export class TemplateComponent implements AfterViewInit {
  @ViewChild('sayHelloTemplate', { read: TemplateRef })
  sayHelloTemplate!: TemplateRef<any>;

  constructor(private vref: ViewContainerRef) {}

  ngAfterViewInit() {
    this.vref.createEmbeddedView(this.sayHelloTemplate);
  }
}

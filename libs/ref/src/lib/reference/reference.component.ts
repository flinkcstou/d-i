import {
  AfterViewInit,
  Component,
  ElementRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewRef
} from '@angular/core';

@Component({
  selector: 'd-i-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export class ReferenceComponent implements AfterViewInit {

  @ViewChild('template', {read: ViewContainerRef}) template: ViewContainerRef;
  @ViewChild('template', {read: TemplateRef}) template1: TemplateRef<any>;
  @ViewChild('template', {read: ElementRef}) template2: ElementRef;
  @ViewChild('template', {read: ViewRef}) template3: ViewRef;

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  @ViewChild('container', {read: TemplateRef}) container1: TemplateRef<any>;
  @ViewChild('container', {read: ElementRef}) container2: ElementRef;

  @ViewChild('div', {read: ViewContainerRef}) div: ViewContainerRef;
  @ViewChild('div', {read: TemplateRef}) div1: TemplateRef<any>;
  @ViewChild('div', {read: ElementRef}) div2: ElementRef;

  @ViewChild('component', {read: ViewContainerRef}) component: ViewContainerRef;
  @ViewChild('component', {read: TemplateRef}) component1: TemplateRef<any>;
  @ViewChild('component', {read: ElementRef}) component2: ElementRef;


  constructor(public elementRef: ElementRef,
              public viewContainerRef: ViewContainerRef,
  ) {
  }

  ngAfterViewInit(): void {

    console.error('TEMPLATE');
    console.error(this.template);
    console.error(this.template1);
    console.error(this.template2);
    console.error(this.template3);

    console.error('CONTAINER');

    console.error(this.container);
    console.error(this.container1);
    console.error(this.container2);

    console.error('DIV');

    console.error(this.div);
    console.error(this.div1);
    console.error(this.div2);

    console.error('COMPONENT');

    console.error(this.component);
    console.error(this.component1);
    console.error(this.component2);


    // this.template.createEmbeddedView(this.template1)
    this.container.createEmbeddedView(this.template1);

    // this.container.createEmbeddedView();
    // this.template1.createEmbeddedView();
    // this.container.createEmbeddedView(this.template1)
    // this.container.createEmbeddedView(this.template1)
    // console.error(this.container)
  }
}

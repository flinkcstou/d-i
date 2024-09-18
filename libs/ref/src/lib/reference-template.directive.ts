import {Directive, ElementRef, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[referenceTemplate]'
})
export class ReferenceTemplateDirective {

  constructor(
      templateRef: TemplateRef<any>,
      elementRef: ElementRef,
      viewContainerRef: ViewContainerRef
  ) {
    console.error('DIRECTIVE TEMPLATE');
    console.error(templateRef);
    console.error(elementRef);
    console.error(viewContainerRef);
  }

}

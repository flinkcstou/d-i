import {Component, ContentChild, inject, Injector, TemplateRef} from '@angular/core';


@Component({
  selector: 'aaa',
  exportAs: 'aaa',
  template: `
    <div>This is AAA {{prop}}>
      <div>
        <ng-content></ng-content>
      </div>
  `,
  styleUrls: ['./root-content.component.scss'],
})
export class AComponent {
  prop = Math.random();

  constructor(public injector: Injector) {
  }
}

@Component({
  selector: 'bbb',
  template: `
    <div>This is BBB. Parent is AAA {{a.prop}}</div>`,
  styleUrls: ['./root-content.component.scss'],
})
export class BComponent {
  constructor(public a: AComponent) {
  }
}

@Component({
  selector: 'ccc',
  template: `
    <aaa #a="aaa">
      <ng-content></ng-content>
      <ng-container [ngTemplateOutlet]="templateRef"
                    [ngTemplateOutletInjector]="a.injector"></ng-container>
    </aaa>`,
  styleUrls: ['./root-content.component.scss'],
})
export class CComponent {
  @ContentChild('template') templateRef: TemplateRef<any>;

}


@Component({
  selector: 'd-i-root-content',
  template: `
    <aaa>
      <bbb></bbb>
    </aaa>
    <ccc>
      <ng-template #template>
        <bbb></bbb>
      </ng-template>
    </ccc>
  `,
})
export class RootContentComponent {
}

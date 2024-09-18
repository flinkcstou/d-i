import {Directive, NgModule} from '@angular/core';
import {SelectConfigService, setSelectConfigService} from './select-config.service';

@Directive({
  selector: '[selectConfigSecond]',
  providers: [
    {
      provide: SelectConfigService,
      useFactory: () => {
        return setSelectConfigService({size: 'lglg', from: 'directive-second'});
      }
    }
  ]
})
export class SelectConfigSecondDirective {

  constructor(
      // @Optional() private selectComponent: SelectComponent
  ) {
  }

}


@NgModule({declarations: [SelectConfigSecondDirective], exports: [SelectConfigSecondDirective]})
export class SelectConfigSecondDirectiveModule {

}

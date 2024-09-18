import {Directive, NgModule} from '@angular/core';
import {SelectConfigService, setSelectConfigService} from './select-config.service';

@Directive({
  selector: '[selectConfig]',
  providers: [
    {
      provide: SelectConfigService,
      useFactory: () => {
        return setSelectConfigService({size: 'lglg', from: 'directive'});
      }
    }
  ]
})
export class SelectConfigDirective {

  constructor(
      // @Optional() private selectComponent: SelectComponent
  ) {
  }

}


@NgModule({declarations: [SelectConfigDirective], exports: [SelectConfigDirective]})
export class SelectConfigDirectiveModule {

}

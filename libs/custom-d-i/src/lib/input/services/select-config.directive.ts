import { Directive, NgModule, Optional } from '@angular/core';
import { SelectConfigService, setSelectConfigService } from './select-config.service';
import { SelectComponent } from '../select/select.component';

@Directive({
  selector: '[selectConfig]',
  providers: [{
    provide: SelectConfigService,
    useFactory: () => {
      console.error('SelectConfigService useFactory directive');

      return setSelectConfigService({size: 'lglg'});
    }
  }]
})
export class SelectConfigDirective {

  hello = 'hello'
  constructor(@Optional() private selectComponent: SelectComponent) {
    console.error(selectComponent);
    console.error('SelectConfigDirective constructor');
  }

}


@NgModule({declarations: [SelectConfigDirective], exports: [SelectConfigDirective]})
export class SelectConfigDirectiveModule {

}

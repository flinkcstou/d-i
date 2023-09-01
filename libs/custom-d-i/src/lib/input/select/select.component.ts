import { Component, Input, Optional } from '@angular/core';
import { SelectConfigService, setSelectConfigService } from '../services/select-config.service';
import { SelectConfigDirective } from '../services/select-config.directive';

@Component({
  selector: 'd-i-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{
    provide: SelectConfigService,
    useFactory: () => {
      console.error('SelectConfigService useFactory');
      return setSelectConfigService({size: 'md'});
    }
  }]
})
export class SelectComponent {

  @Input() size: SelectConfigService['size'];

  @Input() placement: SelectConfigService['placement'];

  constructor(
    @Optional() private selectConfigd: SelectConfigDirective,
    private selectConfigService: SelectConfigService) {
    console.error(selectConfigd);
    console.error('SelectComponent constructor');
    this.size = this.selectConfigService.size;
    this.placement = this.selectConfigService.placement;
  }

}

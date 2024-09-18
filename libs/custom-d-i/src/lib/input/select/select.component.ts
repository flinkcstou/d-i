import {Component, Input} from '@angular/core';
import {SelectConfigService, setSelectConfigService} from '../services/select-config.service';

@Component({
  selector: 'd-i-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{
    provide: SelectConfigService,
    useFactory: () => {
      return setSelectConfigService({size: 'md', from: 'selectComponent'});
    }
  }]
})
export class SelectComponent {

  @Input() size: SelectConfigService['size'];

  @Input() placement: SelectConfigService['placement'];

  constructor(
      // @Optional() private selectConfigd: SelectConfigDirective,
      private selectConfigService: SelectConfigService,
      // private selectConfigDirective: SelectConfigDirective,
  ) {
    // console.error(selectConfigd);
    console.error('SelectComponent from: ', this.selectConfigService.from);
    this.size = this.selectConfigService.size;
    this.placement = this.selectConfigService.placement;
  }

}

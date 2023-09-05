import { Component, Injector } from '@angular/core';
import { SelectConfigService, setSelectConfigService } from '../services/select-config.service';

@Component({
  selector: 'd-i-todo-select',
  templateUrl: './todo-select.component.html',
  styleUrls: ['./todo-select.component.scss'],
  providers: [
    {
      provide: SelectConfigService,
      useFactory: () => setSelectConfigService({
        size: 'lg',
        from: 'todoComponent'
      })
    }
  ]
})
export class TodoSelectComponent {


  constructor(
    private selectConfigService: SelectConfigService,
    private injector: Injector,
  ) {
    console.error('TodoSelectComponent from: ', this.selectConfigService.from);
  }
}

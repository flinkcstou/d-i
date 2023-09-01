import { Component } from '@angular/core';
import { SelectConfigService, setSelectConfigService } from '../services/select-config.service';

@Component({
  selector: 'd-i-todo-select',
  templateUrl: './todo-select.component.html',
  styleUrls: ['./todo-select.component.scss'],
  providers: [
    // {
    //   provide: SelectConfigService,
    //   useFactory: () => setSelectConfigService({
    //     size: 'lg'
    //   })
    // }
  ]
})
export class TodoSelectComponent {
}

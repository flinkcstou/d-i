import {Component} from '@angular/core';

import {LoggerService} from './logger.service';
import {UserContextService} from './services/user-context.service';

@Component({
  selector: 'd-i-in-action',
  templateUrl: './d-i-in-action.component.html',
})
export class DIInActionComponent {

  private userId = 1;

  constructor(logger: LoggerService, public userContext: UserContextService) {
    userContext.loadUser(this.userId);
    logger.logInfo('DIInActionComponent initialized');
  }
}

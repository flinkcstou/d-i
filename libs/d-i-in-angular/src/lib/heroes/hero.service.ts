import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Logger } from '../services/logger.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
  useFactory: (logger: Logger, userService: UserService) =>
    new HeroService(logger, userService.user.isAuthorized),
  deps: [Logger, UserService],
})
export class HeroService {
  constructor(
    private logger: Logger,
    private isAuthorized: boolean) {
  }

  getHeroes() {
    console.error('isAuthorized', this.isAuthorized);
    const auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
    this.logger.log(`Getting heroes for ${auth} user.`);
    return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
  }
}

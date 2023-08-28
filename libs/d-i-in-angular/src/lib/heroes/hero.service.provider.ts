import { HeroService } from './hero.service';
import { Logger } from '../services/logger.service';
import { UserService } from '../services/user.service';

const heroServiceFactory = (logger: Logger, userService: UserService) =>
  new HeroService(logger, userService.user.isAuthorized);

export const heroServiceProvider =
  { provide: HeroService,
    useFactory: heroServiceFactory,
    deps: [Logger, UserService]
  };

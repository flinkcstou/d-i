/*
 * A collection of demo components showing different ways to provide services
 * in @Component metadata
 */
import {Component, Inject, Injectable, OnInit} from '@angular/core';

import {
  APP_CONFIG,
  DIInAngularConfig,
  HERO_DI_CONFIG
} from '../d-i-in-angular.config';

import {HeroService} from '../heroes/hero.service';
import {heroServiceProvider} from '../heroes/hero.service.provider';
import {Logger} from '../services/logger.service';
import {UserService} from '../services/user.service';

const template = '{{log}}';

@Component({
  selector: 'provider-1',
  template,
  providers: [Logger]
})
export class Provider1Component {
  log: string;

  constructor(logger: Logger) {
    logger.log('Hello from logger provided with Logger class');
    this.log = logger.logs[0];
  }
}

//////////////////////////////////////////

@Component({
  selector: 'provider-3',
  template,
  providers:
      [{provide: Logger, useClass: Logger}]
})
export class Provider3Component {
  log: string;

  constructor(logger: Logger) {
    logger.log('Hello from logger provided with useClass:Logger');
    this.log = logger.logs[0];
  }
}

//////////////////////////////////////////
export class BetterLogger extends Logger {
}

@Component({
  selector: 'provider-4',
  template,
  providers:
      [{provide: Logger, useClass: BetterLogger}]
})
export class Provider4Component {
  log: string;

  constructor(logger: Logger) {
    logger.log('Hello from logger provided with useClass:BetterLogger');
    this.log = logger.logs[0];
  }
}

//////////////////////////////////////////

@Injectable()
export class EvenBetterLogger extends Logger {
  constructor(private userService: UserService) {
    super();
  }

  override;

  log(message: string) {
    const name = this.userService.user.name;
    super.log(`Message to ${name}: ${message}`);
  }
}

@Component({
  selector: 'provider-5',
  template,
  providers:
      [UserService,
        {provide: Logger, useClass: EvenBetterLogger}]
})
export class Provider5Component {
  log: string;

  constructor(logger: Logger) {
    logger.log('Hello from EvenBetterlogger');
    this.log = logger.logs[0];
  }
}

//////////////////////////////////////////

export class NewLogger extends Logger {
}

export class OldLogger {
  logs: string[] = [];

  log(message: string) {
    throw new Error('Should not call the old logger!');
  }
}

@Component({
  selector: 'provider-6a',
  template,
  providers:
      [NewLogger,
        // Not aliased! Creates two instances of `NewLogger`
        {provide: OldLogger, useClass: NewLogger}]
})
export class Provider6aComponent {
  log: string;

  constructor(newLogger: NewLogger, oldLogger: OldLogger) {
    if (newLogger === oldLogger) {
      throw new Error('expected the two loggers to be different instances');
    }
    oldLogger.log('Hello OldLogger (but we want NewLogger)');
    // The newLogger wasn't called so no logs[]
    // display the logs of the oldLogger.
    this.log = newLogger.logs[0] || oldLogger.logs[0];
  }
}

@Component({
  selector: 'provider-6b',
  template,
  providers:
      [NewLogger,
        // Alias OldLogger w/ reference to NewLogger
        {provide: OldLogger, useExisting: NewLogger}]
})
export class Provider6bComponent {
  log: string;

  constructor(newLogger: NewLogger, oldLogger: OldLogger) {
    if (newLogger !== oldLogger) {
      throw new Error('expected the two loggers to be the same instance');
    }
    oldLogger.log('Hello from NewLogger (via aliased OldLogger)');
    this.log = newLogger.logs[0];
  }
}

//////////////////////////////////////////

// An object in the shape of the logger service
function silentLoggerFn() {
}

export const SilentLogger = {
  logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
  log: silentLoggerFn
};

@Component({
  selector: 'provider-7',
  template,
  providers:
      [{provide: Logger, useValue: SilentLogger}]
})
export class Provider7Component {
  log: string;

  constructor(logger: Logger) {
    logger.log('Hello from logger provided with useValue');
    this.log = logger.logs[0];
  }
}

/////////////////

@Component({
  selector: 'provider-8',
  template,
  providers: [heroServiceProvider, Logger, UserService]
})
export class Provider8Component {
  // must be true else this component would have blown up at runtime
  log = 'Hero service injected successfully via heroServiceProvider';

  constructor(heroService: HeroService) {
  }
}

/////////////////

@Component({
  selector: 'provider-9',
  template,
  /*
   // Can't use interface as provider token
   [{ provide: DIInAngularConfig, useValue: HERO_DI_CONFIG })]
   */
  providers: [{provide: APP_CONFIG, useValue: HERO_DI_CONFIG}]
})
export class Provider9Component implements OnInit {
  log = '';

  /*
   // Can't inject using the interface as the parameter type
   constructor(private config: DIInAngularConfig){ }
   */
  constructor(@Inject(APP_CONFIG) private config: DIInAngularConfig) {
  }

  ngOnInit() {
    this.log = 'APP_CONFIG Application title is ' + this.config.title;
  }
}

//////////////////////////////////////////
// Sample providers 1 to 7 illustrate a required logger dependency.
// Optional logger, can be null
import {Optional} from '@angular/core';

const someMessage = 'Hello from the injected logger';

@Component({
  selector: 'provider-10',
  template,
  providers: [{provide: Logger, useValue: null}]
})
export class Provider10Component implements OnInit {
  log = '';

  constructor(@Optional() private logger?: Logger) {
    if (this.logger) {
      this.logger.log(someMessage);
    }
  }

  ngOnInit() {
    this.log = this.logger ? this.logger.logs[0] : 'Optional logger was not available';
  }
}

/////////////////

@Component({
  selector: 'app-providers',
  template: `
  <h2>Provider variations</h2>
  <div id="p1"><provider-1></provider-1></div>
  <div id="p3"><provider-3></provider-3></div>
  <div id="p4"><provider-4></provider-4></div>
  <div id="p5"><provider-5></provider-5></div>
  <div id="p6a"><provider-6a></provider-6a></div>
  <div id="p6b"><provider-6b></provider-6b></div>
  <div id="p7"><provider-7></provider-7></div>
  <div id="p8"><provider-8></provider-8></div>
  <div id="p9"><provider-9></provider-9></div>
  <div id="p10"><provider-10></provider-10></div>
  `
})
export class ProvidersComponent {
}

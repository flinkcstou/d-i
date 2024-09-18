import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ProvidersModule} from './providers/providers.module';
import {DIInAngularComponent} from './d-i-in-angular.component';
import {InjectorComponent} from './injector.component';
import {Logger} from './services/logger.service';
import {UserService} from './services/user.service';
import {APP_CONFIG, HERO_DI_CONFIG} from './d-i-in-angular.config';
import {CarComponent} from './car/car.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroesTspComponent} from './heroes/heroes-tsp.component';
import {HeroListComponent} from './heroes/hero-list.component';
import {TestComponent} from './test.component';

// https://angular.io/guide/dependency-injection-overview
// live example https://stackblitz.com/run?file=src%2Fapp%2Fapp.component.ts
@NgModule({
  imports: [
    BrowserModule,
    ProvidersModule
  ],
  declarations: [
    DIInAngularComponent,
    CarComponent,
    HeroesComponent,
    HeroesTspComponent,
    HeroListComponent,
    InjectorComponent,
    TestComponent
  ],
  providers: [
    Logger,
    UserService,
    {provide: APP_CONFIG, useValue: HERO_DI_CONFIG}
  ],
  exports: [CarComponent, HeroesComponent, DIInAngularComponent],
  bootstrap: [DIInAngularComponent]
})
export class DIInAngularModule {
}

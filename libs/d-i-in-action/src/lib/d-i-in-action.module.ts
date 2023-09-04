import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { DIInActionRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HeroData } from './hero-data';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


import { DIInActionComponent } from './d-i-in-action.component';
import { HeroBioComponent } from './hero-bio.component';
import { HeroBiosAndContactsComponent, HeroBiosComponent } from './hero-bios.component';
import { HeroOfTheMonthComponent } from './hero-of-the-month.component';
import { HeroContactComponent } from './hero-contact.component';
import { HeroesBaseComponent, SortedHeroesComponent } from './sorted-heroes.component';
import { HighlightDirective } from './highlight.directive';
import {
  AlexComponent,
  AliceComponent,
  BarryComponent,
  BethComponent,
  BobComponent,
  CarolComponent,
  CathyComponent,
  ChrisComponent,
  CraigComponent,
  ParentFinderComponent
} from './parent-finder.component';
import { StorageComponent } from './storage.component';
import { NgModule } from '@angular/core';

const declarations = [
  DIInActionComponent,
  HeroBiosComponent, HeroBiosAndContactsComponent, HeroBioComponent,
  HeroesBaseComponent, SortedHeroesComponent,
  HeroOfTheMonthComponent, HeroContactComponent,
  HighlightDirective,
  ParentFinderComponent,
];

const componentListA = [AliceComponent, AlexComponent];

const componentListB = [BarryComponent, BethComponent, BobComponent];

const componentListC = [
  CarolComponent, ChrisComponent, CraigComponent,
  CathyComponent
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(HeroData)
    // DIInActionRoutingModule TODO: add routes
  ],
  exports: [DIInActionComponent, HeroContactComponent],
  declarations: [
    declarations,
    componentListA,
    componentListB,
    componentListC,
    StorageComponent,
  ],
  bootstrap: [DIInActionComponent],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class DIInActionModule {
}

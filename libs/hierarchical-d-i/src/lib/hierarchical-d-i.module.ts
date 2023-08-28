import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HierarchicalDIComponent } from './hierarchical-d-i.component';
import { carComponents } from './car.components';
import { HeroesListComponent } from './heroes-list.component';
import { HeroTaxReturnComponent } from './hero-tax-return.component';
import { VillainsListComponent } from './villains-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    HierarchicalDIComponent,
    carComponents,
    HeroesListComponent,
    HeroTaxReturnComponent,
    VillainsListComponent
  ],
  exports: [
    HierarchicalDIComponent
  ],
  bootstrap: [HierarchicalDIComponent]
})
export class HierarchicalDIModule {}

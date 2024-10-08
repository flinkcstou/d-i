import {Component} from '@angular/core';

@Component({
  selector: 'hierarchical-d-i',
  template: `
    <label for="showHeroes">
      <input id="showHeroes" type="checkbox" [checked]="showHeroes"   (change)="showHeroes=!showHeroes">
      Heroes
    </label>
    <label for="showVillains">
      <input id="showVillains" type="checkbox" [checked]="showVillains" (change)="showVillains=!showVillains">
      Villains
    </label>
    <label for="showCars">
      <input id="showCars" type="checkbox" [checked]="showCars"     (change)="showCars=!showCars">
      Cars
    </label>

    <h1>Hierarchical Dependency Injection</h1>

    <app-heroes-list   *ngIf="showHeroes"></app-heroes-list>
    <app-villains-list *ngIf="showVillains"></app-villains-list>
    <app-cars       *ngIf="showCars"></app-cars>
  `
})
export class HierarchicalDIComponent {
  showCars = true;
  showHeroes = true;
  showVillains = true;
}

import {Component, Inject} from '@angular/core';

import {APP_CONFIG, DIInAngularConfig} from './d-i-in-angular.config';
import {UserService} from './services/user.service';

@Component({
  selector: 'd-i-in-angular',
  template: `
    <h1>{{title}}</h1>
    <app-car></app-car>
    <app-injectors></app-injectors>
    <app-tests></app-tests>
    <h2>User</h2>
    <p id="user">
      {{userInfo}}
      <button type="button" (click)="nextUser()">Next User</button>
    <p>
      <app-heroes id="authorized" *ngIf="isAuthorized"></app-heroes>
      <app-heroes id="unauthorized" *ngIf="!isAuthorized"></app-heroes>
      <app-heroes-tsp id="tspAuthorized" *ngIf="isAuthorized"></app-heroes-tsp>
      <app-providers></app-providers>
  `
})
export class DIInAngularComponent {
  title: string;

  constructor(
      @Inject(APP_CONFIG) config: DIInAngularConfig,
      private userService: UserService) {
    this.title = config.title;
  }

  get isAuthorized() {
    return this.user.isAuthorized;
  }

  nextUser() {
    this.userService.getNewUser();
  }

  get user() {
    return this.userService.user;
  }

  get userInfo() {
    return `Current user, ${this.user.name}, is ` +
        `${this.isAuthorized ? '' : 'not'} authorized. `;
  }
}

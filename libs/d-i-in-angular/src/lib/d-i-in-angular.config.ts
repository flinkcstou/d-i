import { DIInAngularConfig } from './d-i-in-angular-config';
export { DIInAngularConfig } from './d-i-in-angular-config';

import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<DIInAngularConfig>('app.config');

export const HERO_DI_CONFIG: DIInAngularConfig = {
  apiEndpoint: 'api.heroes.com',
  title: 'Dependency Injection'
};

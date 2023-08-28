/*
  Must put this interface in its own file instead of d-i-in-angular.config.ts
  or else TypeScript gives a (bogus) warning:
  WARNING in ./src/app/... .ts
  "export 'DIInAngularConfig' was not found in './app.config'
*/
export interface DIInAngularConfig {
  apiEndpoint: string;
  title: string;
}

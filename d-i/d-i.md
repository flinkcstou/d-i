### Dependency injection

- `external-link`
    - https://angular.io/guide/dependency-injection-overview


- Dependency injection in Angular - https://angular.io/guide/dependency-injection-overview
- Understanding dependency injection - https://angular.io/guide/dependency-injection

**Dependency injection in Angular**

- Dependency injection in Angular
    - `library`
        - d-i-in-angular
    - `external-link`
        - https://angular.io/guide/dependency-injection-overview
    - `live-example`
        - https://stackblitz.com/run?file=src%2Fapp%2Fapp.component.ts

**Understanding dependency injection**

- Understanding dependency injection
    - `external-link`
        - https://angular.io/guide/dependency-injection


- Two main roles exist in the DI system: `dependency consumer` and `dependency provider`.
- `providing dependency` - @NgModule.providers, @Component.providers, @Directive.providers property
- `injecting dependency` - by `constructor` or export function `inject(Service)`

- `@Component.providers`, `@Directive.providers`
    - becomes available to all instances of this component and other components and directives used in the `template`.
- `@NgModule.providers`
    - becomes available to all components, directives, and pipes declared in this NgModule or other NgModule which is
      within the same ModuleInjector applicable for this NgModule


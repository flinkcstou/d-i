### Dependency injection

- `external-link`
    - https://angular.io/guide/dependency-injection-overview


- Dependency injection in Angular - https://angular.io/guide/dependency-injection-overview
- Understanding dependency injection - https://angular.io/guide/dependency-injection
- Creating an injectable service - https://angular.io/guide/creating-injectable-service
- Configuring dependency providers - https://angular.io/guide/dependency-injection-provider
- Injection context - https://angular.io/guide/dependency-injection-context
- Hierarchical injectors - Hierarchical injectors

**Dependency injection in Angular**

- Dependency injection in Angular
    - `library`
        - d-i-in-angular
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


- Что такое `@Injectable` аннотация ?
    - Это специальный механизм для angular-a чтоб мы могли (поставлять зависимость)`providing dependency`
    - Аннотация берет ссылку на класс и включает в injectable.
    - Если указан в property `@Injectable.provideIn` значения `root` или `platform` то он в глобальный ModuleInjector
      создает инстацнию по этому классу.
    - А создает инстанцию по этому классу только тогда когда мы обращаемся к этому классу через `Injector` либо
      в `constructor-e` потому что пока мы не дернем это класс в каком нибудь компоненте или в сервисе. он будет просто
      отмечен. Это все сделано для оптимизации. а также Аннотация срабатывает только тогда когда вызываем класс. а Вызов
      может быть только в `constructor-e` или через `Injector`
    - внутри ModuleInjector сам класс который отмечен аннотацией `@Injectable`
      прописывается `provder`  [provide:Class, useValue:Class].
    -

**Configuring dependency providers**

- Configuring dependency providers
    - `link`
        - [configuring-dependency-providers.md](configuring-dependency-providers.md)

**Hierarchical injectors**

- Hierarchical injectors
    - `link`
        - [hierarchical-injectors.md](hierarchical-injectors.md)


      


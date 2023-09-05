### Injection context

- `external link`
    - https://angular.io/guide/dependency-injection-context
- `code`
    - library `d-i-in-angular`
- `live-example`
    - https://angular.io/generated/live-examples/dependency-injection/stackblitz

- Есть контекст внедрения зависимостей
- мы не можем в любом месте достучаться до зависимостей
- мы можем получать зависимостей в определенных местах
- места где можем получать зависимостей
    - `constructor`
    - `useFactory(){}` в типе `Provider` или в аннотации `@Injectable`
    - `factory(){}` в типе `InjectionToken`
    - использования статического метода `inject`
        - внутри `constructor-a`
        - присвоения свойства в классе (assignment property in class)
- если мы хотим в любом месте достучаться до зависимостей, то нужно использовать функцию `runInjectionContext`
- `runInjectionContext` принимает в параметр `callback`
- если мы хотим в любом месте достучаться до зависимостей, то нужно использовать
  сервис `Injector` `this.injector.get(someToken)`

- Изначально когда создавали `Dependency Injection` в angular-e то все миханизмы происходили именно во время создания
  классов сервисов и компонентов и во время инициализации. сам механизм `Dependency Injection` мог создавать все
  зависимости только во время инициализации и поэтому брать после инициализации классов в методах где, либо еще не
  было возможностей. так как не было понятно какие зависимости нужно брать.
- И все аннотации `@Compoent @Directive @NgModule @Injectable` работает вместе с механизмом dependency injection

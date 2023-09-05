### Understanding dependency injection

- `external-link`
    - https://angular.io/guide/dependency-injection
- `code`
    - library `d-i-in-angular`
- `live-example`
    - https://angular.io/generated/live-examples/dependency-injection/stackblitz


- Two main roles exist in the DI system: `dependency consumer` and `dependency provider`.
- `providing dependency` - @NgModule.providers, @Component.providers, @Directive.providers property etc
- `injecting dependency` - by `constructor` or export function `inject(Service)` etc

**providing dependency**

- `@Component.providers`, `@Directive.providers`
    - becomes available to all instances of this component and other components and directives used in the `template`.
    - каждый зарегистрированный service на уровне Component and Directive будет создавать новая инстанция service при
      каждом новом создании инстанции Component and Directive
    - When you register a provider at the component level, you get a new instance of the service with each new instance
      of that component.
- `@NgModule.providers`
    - becomes available to all components, directives, and pipes declared in this NgModule or other NgModule which is
      within the same ModuleInjector applicable for this NgModule
- `@Injectrable.provideIn = 'root'`
    - будет создана на уровне рута единожды

```ts
import { Component, Directive, InjectionToken, Injector, NgModule } from '@angular/core';

@NgModule({
  providers: []
})
@Component({
  providers: []
})
@Directive({
  providers: []
})
@injectable({
  provideIn: 'root'
})
@injectable({
  provideIn: 'any'
})
@injectable({
  provideIn: 'platform'
})
class InjectService {
}

Injector.create({
  providers: []
})

new InjectionToken('some desc', {
  providedIn: 'root' // 'platfrom', 'any'
})
```

**injecting dependency**

- Способы внедрения зависимостей(Way of injecting dependency)
    - `Injector.get(someToken)`
    - `@Inject(someToken)`
    - `inject(someToken)`
    - `constructor(someclass: SomeClass)`

```ts
import { InjectionToken, Injector } from '@angular/core';

const token = new InjectionToken('some token')
Injector.get(token)

class SomeClass {

  constructor(
    private injectService: InjectService,
    @Inject(token) sdf: any
  ) {
  }
}

inject(InjectService)

```

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

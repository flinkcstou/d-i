- you can determine in which **NgModule**, **Component**, or **Directive** you should declare a **provider**.

- `ModuleInjector` hierarchy - Configure a ModuleInjector in this hierarchy using an `@NgModule()` or `@Injectable()`
  annotation.
- `ElementInjector` hierarchy - Created implicitly at each DOM element. An ElementInjector is empty by default unless
  you configure it in the providers property on `@Directive()` or `@Component()`.

**ModuleInjector**

- The `ModuleInjector` can be configured in one of two ways by using:
    - The `@Injectable()` `providedIn` property to refer to `root` or `platform`
    - The `@NgModule()` `providers` property array

- `ModuleInjector` is configured by the `@NgModule.providers` and `NgModule.imports` property.
- `ModuleInjector` is configured by the `@injectable.provideIn` property to refer to `root` or `platform`

```ts
class Greeter {
  greet(name: string) {
    return 'Hello ' + name + '!';
  }
}

@NgModule({
  providers: [
    Greeter // <--provides this service in the @NgModule.providers ModuleInjector 
  ]
})
class HelloWorld {
  greeter: Greeter;

  constructor(greeter: Greeter) {
    this.greeter = greeter;
  }
}


@Injectable({
  providedIn: 'root'  // <--provides this service in the root ModuleInjector
})
export class ItemService {
  name = 'telephone';
}
```

**ElementInjector**

- Providing a service in the `@Component()` decorator using its `providers` or `viewProviders` property configures
  an `ElementInjector`
- When you provide services in a component, that service is available by way of the `ElementInjector` at that component
  instance. It may also be visible at child component/directives

```ts
@Component({
  providers: [{provide: ItemService, useValue: {name: 'lamp'}}]
})
export class TestComponent {
}

```

- `@Directive()` and `@Component()`
    - A component is a special type of directive, which means that just as `@Directive()` has a providers
      property, `@Component()` does too. This means that directives as well as components can configure providers, using
      the providers property. When you configure a provider for a component or directive using the providers property,
      that provider belongs to the `ElementInjector` of that component or directive. Components and directives on the
      same element share an injector.
    -

**Resolution rules**

- When resolving a token for a component/directive, Angular resolves it in two phases:
    - Against its parents in the `ElementInjector` hierarchy.
    - Against its parents in the `ModuleInjector` hierarchy.
    - сначала ищет у ElementInjector если нет то ищет по иерархии вверх смотрим у родительского компонента если там нет
      то еще выше родительского компонента пока не дойдем до последнего родительского компонента. Если мы не нашли то мы
      начинаем искать уже по ModuleInjection, если нет у себя то смотрим у родительского и тд. Если совсем не нашли то
      выкидываем ошибку.

**Resolution modifiers**

- `@Optional()`, `@Self()`, `@SkipSelf()` and `@Host()`.

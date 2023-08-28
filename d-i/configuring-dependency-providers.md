### Configuring dependency providers

Есть несколько возможностей конфигурации Providers

- [{ provide: Logger, useClass: Logger }]
- [{ provide: Logger, useClass: BetterLogger }]
- [{ provide: OldLogger, useExisting: NewLogger}]
- [{ provide: HeroService, useFactory: heroServiceFactory, deps: [Logger, UserService]}]
- [{ provide: APP_CONFIG, useValue: HERO_DI_CONFIG }]

- по дефолту когда мы просто указываем `providers:[SomeService]`, то под капотом трансформируется в другой объект
    - `providers:[{provider:SomeService, useClass:SomeService]`
    - это нужно для того чтоб не было коллизии(collision) с наименованиями зависимостей(Dependency)
    - так выходит намного удобнее. что `provider` это token по которому можем достать значения.
    - `provider` может быть любой тип данных в js, потому что каждый из них иммет ссылку на память.
    - а сами значения как мы должны инициализировать для токена мы храним по
      property `(useClass, useExising, useValue, useFactory)`.
    - Выходит что когда мы обращаемся к `provider` токену, если нету еще значения в хранилище `dependency injection`
    - то смотрим на property `(useClass, useExising, useValue, useFactory)` если один из них имеет значения то по нему
      создается значения для токена. а потом когда мы следующий раз обращаемся к токену у нас уже будет лежать значения.

- `Interface` нельзя использовать для `providing dependency` а также для `injecting dependency`
    - потому что interface это метаданный в typescript-e при компилации в js все interface удаляются. Выходит что
      interface не имеет ссылки к памяти


- вызов `injection dependency`  можно только в `конструкторе` потому что доступ до `dependency injection` реализовали
  таким вот способом в angular-e.
- 

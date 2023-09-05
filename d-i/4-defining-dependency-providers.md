### Defining dependency providers

- `external link`
    - https://angular.io/guide/dependency-injection-providers
- `code`
    - library `d-i-in-angular`
- `live-example`
    - https://angular.io/generated/live-examples/dependency-injection/stackblitz

**Configuring dependency providers**

- поставщик имеет тип - `Provider`

```ts
interface Provider extends Type<any> {
  provide: any,

  useClass: Type<any>,
  useFactory: Function
  useExisting: any,
  useValue: any,
  deps: any[]
}
```

- свойства `provide` это и есть `ключ`, `key` либо `token` по которому будем стучаться для получения значения
- свойства `provide` может быть любой тип данных в JS `any data types`
- `Interface` не может быть типом данных так как это специфика typescript-a и во время сборки interface удаляется
- `Interface` не есть тип данных, так как `Interface` не имеет ссылку на память. а все остальные типы данных имеют
  ссылку на память где хранятся их значения
- The provide property holds the token that serves as the key for both locating a dependency value and configuring the
  injector.

- Все остальные свойства это определения как мы будем определять значения
- The second property is a provider definition object, which tells the injector how to create the dependency value. The
  provider-definition key can be one of the following:
    - `useClass` - this option tells Angular DI to instantiate a provided class when a dependency is injected
    - `useExisting` - allows you to alias a token and reference any existing one.
    - `useFactory` - allows you to define a function that constructs a dependency.
    - `useValue` - provides a static value that should be used as a dependency.

**Using an InjectionToken object**

- также было создано специальный класс `InjectionToken` для того чтобы определять `token` для поставщика(Provider)
- Он был создан для того чтоб разработчики не плодили тип данных `string` для tokena. Это тоже самое как в самом `Js`
  было
  создано `Symbol` чтоб случайно не было конфликта между несколькими библиотеками где используют один и тот же
  свойства `properties` Если это было тип данных `string` для property. то одна библиотека могла перезаписать
  значения `property` так как можно спокойно до него достучаться. Пример `obj = {'id':'someValue'}`. В этом случае
  каждая библиотека может изменить свойства 'id'/ и чтоб не было такого кейча можем поменять на
  Symbol `obj = {Symbol('id'):'someValue'}`. Теперь другая бибиотека не имеет доступа.
- При создания `InjectionToken`-a примерно происходит такая ж парадигма. Если у тебя нет ссылки до этого объекта ты не
  сможешь изменить. и не сможешь достучаться с другой библиотеки к созданной инстанции `InjectionToken`
- Вторая причина это то что разработчики часто делают ошибки. Если мы дали к `token-у` тип данных `string` то во время
  разрабоки разработчик может случайно добавить лишний символ и тогда выходит что мы не сможем иметь доступа до
  поставщика потому что разработчик допустил нелепую ошибку случайно не правильно написав слово. И чтоб такого не было
  лучше использовать `InjectionToken`

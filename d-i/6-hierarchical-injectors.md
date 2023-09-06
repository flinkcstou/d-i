### Hierarchical injectors

- `external-link`
    - https://angular.io/guide/hierarchical-dependency-injection
- `code`
    - library `resolution-modifiers`
    - library `providers-viewproviders`
    - library `hierarchical-d-i`
- `live-example`
    - https://angular.io/generated/live-examples/hierarchical-dependency-injection/stackblitz
    - https://stackblitz.com/run?file=src/app/app.component.ts
    - https://angular.io/generated/live-examples/providers-viewproviders/stackblitz

- Angular has two injector hierarchies: `ModuleInjector hierarchy`, `ElementInjector hierarchy`
    - `ModuleInjector hierarchy`  включает
        - `@NgModule()`
        - `@Injectable()`
    - `ElementInjector hierarchy` включает
        - `@Directive()`
        - `@Component()`

**ModuleInjector hierarchy**

- The `ModuleInjector` can be configured in one of two ways by using:
    - The `@Injectable()` providedIn property to refer to `root` or `platform`
    - The `@NgModule()` providers array
- Предпочтительнее использовать `@Injectable.provideIn='root'` чем `@NgModule.providers` потому что хорошо работает
  tree-shaking для `@Injectable` если сервисы не будут использованы, то при сборке они не будут включаться в билд.

- `ModuleInjector` is configured by the `@NgModule.providers` and `NgModule.imports` property.
- `ModuleInjector` is a flattening of all the providers arrays that can be reached by following the `NgModule.imports`
  recursively.
- Все поставщики `Providers` которые указаны в `@NgModule.providers` и все providers которые есть в модулях
  в `@NgModule.imoprts` будут собираться рекурсивно в один массив и будет внедрен в модуле.
- Это значит для `ModuleInjector` нет иерархии между модулями, даже если в `childModule` будет указан
  в `providers` `childService` мы сможем его достать в parentModule, если в `parentModule` в imports
  указан `childModule`. так как все `@NgModule.providers` собирается рекурсивно в один массив пока последний child
  import не окажется пустым, свойства `providers`. Поэтому не имеет значения вложенность модулей, порядок модулей,
  зависимость между собой модулей. если касается тема `dependency-injector`
- будет разница вложенность только в случае `lazy module`
- Также если `childImport` был импортирован несколько раз в разные модули. Дубликаты исчезнут. будет создана только одна
  инстанция Модуля и Зависимостей. Не будет такого что я указал дважды childImport и дважды будет создана инстанция
  модуля и его зависимостей, а также `providers`. Тут хорошо начинает работать `tree-shaking` очистка дубликатов, а
  также оптимизация импортов, если уже childImport был импортирован, то второй раз он не будет импортироваться, даже
  если это в другом модуле был импортирован.
- работа `import` идет так. сначала проверяет были ли до этого импортирована, неважно в другом импорте, либо ж в этом
  импорте. Import глобально регистрирует все импорты. Если нет, то начинает импортировать. если есть - игнорирует.

**ElementInjector hierarchy**

- Angular creates `ElementInjector` hierarchies implicitly for each DOM element.
- `ElementInjector` будет создаваться зависимости для каждого DOM элемента,
- для каждого DOM элемента будет создана своя инстанция services, components, directives

- The `ElementInjector` can be configured in ways by using:
    - `@Component.providers`
    - `@Component.viewProviders`
    - `@Directive.providers`

- Для одного и того ж элемента где указан `Directive`, `Component` будет один общий `ElementInjector`
- Это значит если мы указали в `providers` один и тот же сервис и в `@Directive` и в `@Comopnent` один из них
  перезапишет другое, то есть один из дубликатов удалится. А какой перезапишется - это зависит от очереди в массиве где
  мы указываем
- Это значит что у них общий объект `providers`
  зависимости. это в `@ngModules.imports` что мы последнее импортировали то его значения и зависимости останутся. либо в
  `@NgModules.providers`, либо в `@Ngmodule.declarations` зависит от ситуации. нужно поиграться.


- Что главнее `ElementInjector` или `ModuleInjector` ?
    - Первое где будут искать зависимости это в `ElementInjector` дальше по родительским `ElementInjector`.
    - Если не найден то возвращается к элементу и начиная сначала начинает искать по ModuleInjector, дальше по
      родительским `ModuleInjector`
    - Если ничего не найден. выкидывает ошибку.
    - Поиск зависимостей работает через паттерн **Prototype**, где есть ссылка на родительский и так до корневого
      уровня.
    - первый найденный уровень `ElementInjector` где есть зависимость то и его вернет. Даже если есть в родительском.
      Поиск прекратится как только найдет на одном из уровней `ElementInjector`

**Resolution modifiers**

- @Optional() - if not found, return null not throwError,
- @Self() - get service in own ElementInjector, if not found return throwError
- @SkipSelf() - skip own ElementInjector and start searching by parent ElementInjector
- @Host()- get service in own ElementInjector which located in ViewProviders, if not found return throwError


- logical tree - как под капотом представляется дерево с зависимостями
- <#VIEW>  - указывает на то где будут создаваться сервисы по иерархии
- <#VIEW> - когда мы указываем также на этой уровне `providers` в компонентах или в директиве

```html

<!--it's logical tree not DOM tree-->
<app-root>
  <#VIEW>
  <app-child>
    <#VIEW>
    …content goes here…
  </
  #VIEW>
  </app-child>
</#VIEW>
</app-root>

```

- что нам дает logical tree ?
    - Нам дает понимания того как Сервисы будут внедрены в `dom tree` и по какой иерархии можно будет доставать
    - если мы внедрили зависимость в `child`, то соответственно вы не сможете достать его в `parent-е`.
    - Если вы внедрили зависимость в `parent`, то соответственно вы сможете также иметь доступ к зависимостям
      в `child-е`
    - Здесь все работает также по паттерну `Prototype`. по иерархии вверх.
    - Также нужно понимать что тут не только `providers` `ViewProviders` будут доступны по иерархии. А также `Component`
      , `Directive`.
    - `Component` , `Directive` также являются внедряемыми сервисами. и мы это указываем через
      аннотации `@Directive`, `@Component`, Если Сервисы мы указываем сами через поставщиков
      зависимостей `Dependency-providers`, то директивы и компоненты мы указываем через `dom tree`.
    - Это значит что `childComponent` может в конструкторе получить инстанцию `parentComponent` а также его
      прородителей.
    - Такая ж история с `Directive`
    - если компонента и несколько директив навешаны на один `dom element`, то для каждой создается своя инстанция. но
      их свойства `providers`, `viewProviders` объединяются в один массив.
    - так как на одном `dom element-e` может быть параллельно одна компонента и много директив. Для всех них создается
      только один `ElementInjector`.
    - один `dom element` равно один  `ElementInjector`
    - сам `ElementInjector` собирает в один массив все `providers` и `viewProviders` которые есть в свойствах компоненты
      и
      директив.
    - Получается  `ElementInjector` лежит сервисы, которые указали в `providers`. `viewProviders`. Здесь также будут
      находиться `Component`, `Directive` так как они тоже есть своего рода сервисы.
    - Это значит что если мы параллельно повесили несколько директив на один `dom element` и еще одну компоненту.
    - мы в этом component-e сможем достать в конструкторе инстанцию директивы так как они все находятся
      в `ElementInjector-e`. Как мы знаем поиск идет от `current ElementInjector` и работает по паттерну `Prototype`
    - Мы можем отловить ошибку так называемую `Circular Dependency` если в конструкторе компоненты хотим достать
      инстанцию директивы и в самом директиве в конструкторе хотим достать инстанцию компоненты. Ошибка выходит потому
      что идет ссылка друг на друга.

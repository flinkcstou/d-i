### Creating an injectable service

- `external link`
    - https://angular.io/guide/creating-injectable-service
- `code`
    - library `d-i-in-angular`
- `live-example`
    - https://angular.io/generated/live-examples/dependency-injection/stackblitz

**Creating an injectable service**

- Для того чтоб создать Service необходимо просто указать аннотацией @Injectable
- В даноом случае мы еще указали поставщика зависимости и указали как `root`
- Этот сервис будет доступен по всему проекту

```ts
import { Injectable } from '@angular/core';

@Injectable({
  provideIn: 'root'
})
class SomeClass {
}
```

**Injecting services**

- Теперь, для того чтоб использовать этот сервис нам просто необходимо вызвать

```ts

@Component()
class SomeComponent {
  constructor(private someClass: SomeClass) {
  }
}
```

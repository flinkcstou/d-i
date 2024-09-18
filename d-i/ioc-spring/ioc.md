### @Autowired, @Qualifier, @Resource, @Inject

### @Value

### @Lookup

- используется для инъекции бинов с прототипным (scoped) жизненным циклом

### @Primary

- используется для указания основного бина, который должен быть выбран по умолчанию при наличии нескольких бинов одного
  типа

### @Lazy

- используется для ленивой инъекции зависимостей.

```java
@Autowired
    @Lazy
    private MyRepository myRepository; 
```

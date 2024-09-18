### CREATE INDEX idx_last_name ON employees (last_name);

### B-tree индекс

### Hash индекс

### GIN (Generalized Inverted Index)

    - GIN индексы хорошо подходят для работы с массивами, JSONB данными и полнотекстовым поиском
    - CREATE INDEX idx_column_name_gin ON table_name USING gin (column_name);

### GiST (Generalized Search Tree)

    - геометрическими данными.

### BRIN (Block Range INdexes)

    - работа с большими данными которые упорядочены на диске

### Partial и Expression индексы

    - индексирует только часть данных в таблице
    - индексирует результат вычисления выражения:
    - CREATE INDEX idx_column1_active ON my_table (column1) WHERE is_active = true
    - CREATE INDEX idx_lower_column1 ON my_table ((lower(column1)));

### Unique индекс

    - CREATE UNIQUE INDEX idx_unique_email ON employees (email);
    - При попытке вставить или обновить строку с уже существующим значением в столбце, на котором создан уникальный индекс, будет сгенерирована ошибка.

### Composite Index

    - CREATE INDEX idx_column1_column2 ON my_table (column1, column2);

### Вручную переиндексирование

    - REINDEX TABLE my_table;

### Физическое упорядочивание

    - VACUUM: Команда VACUUM помогает реорганизовать физическое хранение данных и может улучшить производительность за счет устранения фрагментации. Однако это не упорядочивает данные по какому-либо критерию:

package com.dmdev.spring.ioc;

import java.lang.reflect.Constructor;
import java.util.HashMap;
import java.util.Map;

class DIContainer {

  private Map<Class<?>, Object> instances = new HashMap<>();

  public <T> T get(Class<T> clazz) {
    try {
      // Проверяем, есть ли уже созданный экземпляр
      if (instances.containsKey(clazz)) {
        return clazz.cast(instances.get(clazz));
      }

      // Ищем конструктор класса
      Constructor<?>[] constructors = clazz.getConstructors();
      if (constructors.length == 0) {
        throw new RuntimeException("No public constructors found for class " + clazz.getName());
      }

      Constructor<?> constructor = constructors[0];
      Class<?>[] parameterTypes = constructor.getParameterTypes();
      Object[] parameters = new Object[parameterTypes.length];

      // Рекурсивно создаем зависимости
      for (int i = 0; i < parameterTypes.length; i++) {
        parameters[i] = get(parameterTypes[i]);
      }

      // Создаем новый экземпляр класса
      T instance = clazz.cast(constructor.newInstance(parameters));

      // Сохраняем созданный экземпляр в контейнере
      instances.put(clazz, instance);

      return instance;
    } catch (Exception e) {
      throw new RuntimeException("Failed to create instance of class " + clazz.getName(), e);
    }
  }

}

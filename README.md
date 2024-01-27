# Паттерны

1. [Стратегия](./Паттерны/Стратегия.md)
2. [Фабрика](./Паттерны/Фабрика.md)
3. [Шаблонный метод](./Паттерны/ШаблонныйМетод.md)
4. [Фасад](./Паттерны/Фасад.md)
5. [Адаптер](./Паттерны/Адаптер.md)
6. [Цепочка обязанностей](./Паттерны/ЦепочкаОбязанностей.md)
7. [Состояние](./Паттерны/Состояние.md)
8. [Мост](./Паттерны/Мост.md)

Малоприменимы в 1С:
- [Одиночка](./Паттерны/Одиночка.md)
- [Команда](./Паттерны/Команда.md)
- [Строитель](./Паттерны/Строитель.md)
- [Декоратор](./Паттерны/Декоратор.md)
- [Заместитель](./Паттерны/Заместитель.md)
- [Наблюдатель](./Паттерны/Наблюдатель.md)
- [Посредник](./Паттерны/Посредник.md)
- [Итератор и Компоновщик](./Паттерны/ИтераторКомпоновщик.md)

При использовании паттернов проектирования следует учитывать, что они могут видоизменяться и адаптироваться к конкретным потребностям и условиям разработки. 

Не стоит ожидать, что реализация паттерна в коде будет полностью соответствовать его "каноническому" описанию. 

Важно понимать суть и основную идею паттерна, а конкретные детали реализации могут гибко изменяться. 

Главное - чтобы модифицированный паттерн по-прежнему решал те задачи, для которых он предназначен, сохраняя свои ключевые преимущества. Творческий и гибкий подход к использованию устоявшихся паттернов часто оправдан и полезен на практике.

# Классификация

**Порождающие паттерны** связаны с созданием экземпляров объектов. Все они обеспечивают средства логической изоляции клиента от создаваемых объектов:

*Одиночка, Фабричный метод, Абстрактная фабрика, Строитель, Прототип.*

**Структурные паттерны** объединяют классы или объекты в более крупные структуры:

*Фасад, Адаптер, Заместитель, Декоратор, Компоновщик, Мост, Приспособленец.*

**Поведенческие паттерны** взаимодействуют и распределяют обязанности между классами и объектами:

*Стратегия, Состояние, Шаблонный метод, Команда, Наблюдатель, Посетитель, Посредник, Хранитель, Интерпретатор, Цепочка Обязаннсотей.*

# Дополнительно
- [Принципы](./Дополнительно/Принципы.md)
- [MVC (Модель-Представление-Контроллер)](./Дополнительно/MVC.md)
- [(Видео) Практика чистого кода на 1С](https://www.youtube.com/live/aI0Pir8UCec?si=SS7G0A62wKNccu5o)
- [(Видео) Design Patterns в 1С. Рассматриваем и пробуем реализовать популярные GoF-паттерны](https://www.youtube.com/live/3cI1AVBBGTY?si=6rZ3aHfEDlmEiMJ2)
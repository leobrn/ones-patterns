---
sidebar_position: 12
sidebar_label: Декоратор
title:  Декоратор (Decorator)
description: Decorator
---
## Теория
**Декоратор** - динамически наделяет объект новыми возможностями и является гибкой альтернативой субклассированию в области расширения функциональности.
- Имеет тот же интерфейс, что и декорируемый объект
- Декоратор содержит экземпляр базового компонента и делегирует ему вызовы
- Но при этом декоратор может расширять базовый функционал до или после делегирования

## БСП
- Примеры на уровне БСП и типовых конфигураций не найдены. На уровне платформы существуют следующие механизмы реализующие данный паттерн: переопределение функций на уровне расширений.

## Примеры
- [Принципы ООП в 1С на примере реализации pattern Decorator](https://infostart.ru/1c/articles/850699/)
- [Я у мамы декоратор...](https://infostart.ru/1c/tools/1549575/)

## Код

Есть Общий модуль реализующий экспорт данных в XML
```
Функция ЭкспортироватьВXML(Данные) Экспорт
  
    //...логика экспорта в XML

 КонецФункции
```

Модуль обработки реализующий паттерн декоратор
```
Перем Экспортер Экспорт; 

Функция ЭкспортироватьВXML(Данные) Экспорт

    // Валидация
    ОбработатьОшибкиПроверки(Данные); 
  
    Логирование.Информация("Начало экспорта");
  
    Результат = Экспортер.ЭкспортироватьВXML(Данные);
  
    Логирование.Информация("Окончание экспорта");
  
    Возврат Результат;
  
КонецФункции
```
Пример вызова
```
// Создаем декоратор
Декоратор = Обработки.ДекораторЭкспорта.Создать();
    
// Указываем что будем декорировать
Декоратор.УстановитьЭкспортера(ОбменXML);

// Вызываем через декоратор
Данные = ДанныеДляЭкспорта();
Результат = Декоратор.ЭкспортироватьВXML(Данные);
```

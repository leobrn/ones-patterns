---
sidebar_position: 11
sidebar_label: Строитель
title:  Строитель (Builder)
description: Builder
---
## Теория
**Строитель** - позволяет создавать сложные объекты пошагово, без привязки к конкретным классам. Часто используется для создания составных структур.

Преимущества:
- Инкапсуляция процесса создания сложного объекта.
- Возможность поэтапного конструирования объекта с переменным набором этапов.
- Сокрытие внутреннего представления продукта от клиента.
- Реализация продуктов могут свободно изменяться, потому что клиент имеет дело только с абстрактным интерфейсом.

## БСП
- 
## Примеры
- [zeegin:Builder](https://github.com/zeegin/DesignPatterns/tree/master/Builder)
- [Новый взгляд на управляемые формы](https://infostart.ru/1c/articles/1979960/)

## Код
Модуль обработки:
```
Перем ЗаявкаНаРасходованиеДС;

// Конструктор
Функция СоздатьЗаявкуНаРасходованиеДС() Экспорт
        
    ЗаявкаНаРасходованиеДС = Новый Структура;
    ЗаявкаНаРасходованиеДС.Вставить("Дата", ТекущаяДата());
    ЗаявкаНаРасходованиеДС.Вставить("Статус", Перечисления.СтатусыЗаявок.Черновик);
        
    Возврат ЭтотОбъект;
        
КонецФункции

// методы изменения объекта
Функция УстановитьПодразделение(Подразделение) Экспорт
        
    ЗаявкаНаРасходованиеДС.Вставить("Подразделение", Подразделение);
       
    Возврат ЭтотОбъект;
        
КонецФункции

Функция ДобавитьТовар(Номенклатура, Количество) Экспорт

    ЗаявкаНаРасходованиеДС.Товары.Добавить(Новый Структура("Номенклатура, Количество", Номенклатура, Количество));  
        
    Возврат ЭтотОбъект;
        
КонецФункции

// Возвращает результирующий объект
Функция ПолучитьЗаявку() Экспорт
    
    Возврат ЗаявкаНаРасходованиеДС;
    
КонецФункции
```
Использование:
```
Строитель = Обработки.СтроительЗаявки.Создать();
    
Заявка = Строитель.СоздатьЗаявкуНаРасходованиеДС()
    .УстановитьПодразделение(Подразделение)
    .ДобавитьТовар(Товар1, 10)
    .ДобавитьТовар(Товар2, 20) 
    .ПолучитьЗаявку();
                
ОформитьЗаявку(Заявка);
```
Получается пошаговое формирование заявки.

Следующий простой пример также можно отнести к паттерну **Строитель**:
```    
Док = ДокументыКадровогоУчета.СоздатьДокумент(Перечисление.ТипыДокументов.ПриказОПриемеНаРаботу);
ДокументыКадровогоУчета.ЗаполнитьРеквизиты(Док);
ДокументыКадровогоУчета.ЗаполнитьТЧ(Док);
ДокументыКадровогоУчета.Проверить(Док);
```

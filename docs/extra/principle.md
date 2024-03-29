---
sidebar_position: 2
sidebar_label: Принципы
title: Принципы
description: SOLID и другие основные принципы
---
## SOLID

Принципы SOLID это важные принципы объектно-ориентированного программирования, которые применимы и к разработке в 1С.

### SRP (Single Responsibility)
Принцип единственной ответственности. Метод, модуль, объект, подсистема должен иметь единственную причину для изменения, а также должен иметь одного единственного ответственного (отдел бухгалтерии/отдел кадров/отдел продаж и т.п) и если несколько ответственных просят внести изменения в один и тот же модуль то это считается нарушением принципа. Из этого следует:

- Каждый модуль (метод, подсистема) должен быть ориентирован на решение одной единственной задачи приложения
- За один модуль должен отвечать только один "владелец" - будь то отдел бухгалтерии, кадров и т.п.
- Если за изменениями в модуль обращаются сразу несколько отделов (бухгалтерия и кадры) - это нарушение принципа, т.к. модуль в этом случае решает несколько задач для разных подсистем.

Каждый модуль должен иметь четко определенную область ответственности и единственного "владельца", отвечающего за эту функциональность. Тогда при изменении требований будет понятно, какой именно модуль следует менять.

### OCP (Open/Closed)
Принцип открытости/закрытости. Следует предусмотреть возможность расширения поведения без изменения существующего кода.
Проблема в том, что редактирование старого рабочего кода чревато ошибками. Поэтому лучше сделать код расширяемым:

- использовать дополнительные модули
- события, обработчики событий
- интерфейсы вместо конкретных классов
- например, в 1С это можно реализовать через общие модули с постфиксом **Переопределяемые** или **Локализация**.

Тогда новый код можно добавлять безопасно, не изменяя старый. Это в разы снижает риски поломки системы при расширении функционала.

### LSP (Liskov Substitution)

Принцип подстановки Лисков означает, что при использовании механизма переопределения, поведение и результаты вызова переопределяемых обработок и функций должны соответствовать базовой реализации.

 Это необходимо для сохранения предсказуемости, обеспечения совместимости с типовыми решениями и предотвращения ошибок при обновлении конфигурации. Переопределенные элементы должны возвращать данные в формате близком к базовому, чтобы избежать проблем в вызывающем коде.

 Например, если некоторый метод принимает на вход объект определённого типа "Документ.Аренда", то этот же модуль должен корректно работать, если в качестве аргумента передать ему объект любого производного типа "Документ.Субаренда", который концептуально является "наследником" базового объекта. При этом "наследник" должен иметь тот же набор реквизитов, что и "предок", или расширенный.

### ISP (Interface Segregation)

Принцип разделения интерфейса: 
- Разделяйте интерфейсы конфигурации на более узкие, специализированные интерфейсы, группируя методы и свойства по их назначению.
- Старайтесь минимизировать число методов и свойств в публичных интерфейсах модулей и менеджеров конфигурации. Включайте в интерфейс только то, что действительно нужно клиентам данного интерфейса.
- Если интерфейс модуля или менеджера чрезмерно раздут и содержит много несвязанных методов, лучше разбейте его на несколько отдельных интерфейсов.
- Клиенты и потребители интерфейсов (другие модули, формы, команды и т.п.) должны зависеть только от тех методов, которые им абсолютно необходимы.

### DIP (Dependency Inversion)

Принцип инверсии зависимостей в 1С означает, что общие модули верхнего уровня (например, модуль реализующий бизнес-логику) не должны напрямую зависеть от других общих модулей нижнего уровня (скажем, от модулей реализующих работу с данными). 

Такой подход даёт слабую связанность между уровнями и позволяет менять реализационные модули, не затрагивая бизнес-логику. 
## PTI
**PTI (Program to an interface, not an implementation)** - программируйте на уровне интерфейсов, а не реализации. Представим, что мы разрабатываем в 1С подсистему для отправки электронной почты.
Можно было бы напрямую обращаться к классам поставщиков:
    
```
// Плохо
Почта = ПочтовыйСервисYandex();
Почта.ВвестиАдресатов(Контрагенты);  
Почта.ВвестиТекстПисьма(ТекстПисьма);
Почта.ОтправитьПисьмо();

Почта = ПочтовыйСервисMail();
Почта.ЗадатьПолучателей(Контрагенты);
Почта.ЗадатьТекст(ТекстПисьма);  
Почта.Отправить();
```
Но так мы "зашьемся" на конкретном поставщике и его методах. Гораздо лучше ввести универсальный интерфейс:
```    
// Хорошо
Почта = ПочтовыйСервис.Создать(Поставщик);
Почта.УстановитьПолучателей(Контрагенты);
Почта.УстановитьТекст(ТекстПисьма);  
Почта.Отправить();
```
Тогда позже при смене поставщика достаточно будет подменить только создание объекта, не меняя вызовы отправки. В 1С мы бы использовали общие модули или обработки в качестве интерфейсов.

## Loose coupling
Стремитесь к слабой связанности взаимодействующих объектов. Этот принцип означает, что разные части программы (модули, классы, объекты) должны знать друг о друге как можно меньше.
Представим, что у нас есть процедура печати документа:
```    
// Плохо
Процедура НапечататьДокумент(Док)

    Документ = Док; // сильная связанность

    Если ТипЗнч(Док) = Тип("ДокументСчетФактура") Тогда
        // печатаем счет-фактуру
    ИначеЕсли ТипЗнч(Док) = Тип("ДокументСкладскаяНакладная") Тогда
        // печатаем накладную
    
    И Так Далее...

КонецПроцедуры
```
Это плохо - процедура сильно зависит от конкретных типов документов. Лучше использовать интерфейс:
```
Процедура НапечататьДокумент(ДокОбъект)
  
    ДокОбъект.Напечатать();
  
КонецПроцедуры

// а типы документов реализуют интерфейс
Процедура Напечатать() Экспорт

    // печать текущего документа

КонецПроцедуры
```
Теперь процедура печати не зависит от конкретных типов - связанность слабая.

## Method Responsibility
Принципа единственной ответственности метода. Каждый метод должен нести ответственность только за одну вещь.

Процедура не должна выполнять и вычисления, и запись в регистры, и форматирование данных. Например, плохим решением будет процедура, которая формирует отчет, отправляет его по email и еще распечатывает на принтере.
```
// Плохо
Процедура СформироватьОтчет() 
   Отчет.Сформировать();  
   ОтправкаПоЭлектроннойПочте(Отчет);  
   УправлениеПечатью
КонецПроцедуры
        
// Хорошо
Функция СформироватьОтчет()  
    Отчет.Сформировать();
КонецФункции

Процедура ОтправитьОтчет(Отчет) 
    ОтправкаПоЭлектроннойПочте(Отчет);
КонецПроцедуры 

Процедура РаспечататьОтчет(Отчет)
    УправлениеПечатью(Отчет);  
КонецПроцедуры
```

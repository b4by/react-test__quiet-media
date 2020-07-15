---
## ТЗ ##

  - React
  - webpack
  - git

### Интерфейс приложения ###

Слева располагается меню, состоящее из 2 пунктов: «Параметры» и «Предпросмотр». При первичном открытии пункт «Предпросмотр» недоступен для клика, текущим является пункт «Параметры». В центре располагается содержимое пункта меню; для «Параметры» - это форма с параметрами баннера, а для «Предпросмотр» - сформированный на базе заполненной формы баннер. 
Форма для пункта меню «Параметры» имеет 5 полей ввода: «Название баннера» (текстовое), «Тип баннера» (селект, значения - «Прямой» или «Обратный»), «Изображение вертикальное» (текстовое, ссылка), «Изображение горизонтальное» (текстовое, ссылка), «Целевая ссылка» (текстовое, ссылка). Все поля являются обязательными для заполнения и должны валидироваться. Ниже полей располагается кнопка «Показать», которая, по сути, осуществляет сабмит формы.

### Алгоритм работы ###
При открытии страницы в левом меню активным является пункт «Параметры», пункт меню «Предпросмотр» недоступен. В центральной части отображается форма, описанная выше. При ее заполнении и нажатии на кнопку «Показать» ниже формы должен появляться динамический баннер, состоящий из картинки, заданной в соответствующем поле, поверх которой должны располагаться название баннера и кнопка «Перейти»; щелчок по этой кнопке должен открывать новое окно браузера с целевой ссылкой, указанной в параметрах. Если тип баннера задан как «Обратный», то порядок меняется - сначала кнопка, потом название. В зависимости от ориентации устройства изображение меняется на соответствующее.
Пункт меню слева после нажатия на кнопку «Показать» должен смениться на пункт «Предпросмотр», который становится активным и доступным для клика. Теперь можно перемещаться между пунктами меню, нажимая в меню на «Предпросмотр» и видя текущий отображенный баннер, либо нажимая на «Параметры» и возвращаясь к форме ввода параметров (возможно со скроллом). При возврате на форму ввода параметров и нажатии на кнопку «Показать» должен показываться обновленный баннер, основанный на обновленных параметрах; пункт меню также снова должен смениться на «Предпросмотр»

-----

## Установка и запуск

    npm install
    npm start


---

## Отзыв ##

![Review](https://github.com/b4by/react-test__quiet-media/blob/master/review_quite.jpg)
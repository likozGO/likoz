# likoz
## Blog-shop/etc `ver: 0.0.1`

Вопросы:
1.  Разделение бека и фронта в рамках одного проекта;

    1.1. Как раскидать по папкам грамотно;
    1.2. Должен ли лежать на другой урле бек (пример netlify урла начинается с www.backend-adress.com)
    
2. У чувака в ролике на ютубе видел в бекенд папке лежали node module и внутри фронтовой части тоже была папка с таким же названием, вопрос зачем;

3. Вынос ErrorMessage с Formik (path: PageStart/RegisterUser/RegisterUser.js)

4. Как перенести библиотеку ( или большой файл) стилей только на один компонент? вот так не возможно input,form {...}?

5. Роутинг приложения, nested routes? как его упростить, нормально ли что по приложению куча switch в разных местах? Или создать в одном месте и обрабатывать через map константу для определенного компонента

53:00 https://www.youtube.com/watch?v=7CqJlxBYj-M


https://dev-likoz.netlify.com/ - dev

https://likoz.netlify.com/ - prod



###Что сделать
**Общее для проекта**
1. Найти ролик связки netlify и бекенда

2. Подключть реакт роутер настроить начальный роутинг, вынести пути в константный файл **+**

**Страница регистрации:**

1. Убрать правила валидации в отдельный файл **+**

2. Изменить вид подсказок в коде, сделать более короткими
https://jaredpalmer.com/formik/docs/tutorial CTRL-F: "ErrorMessage" **+**

3. Добавить отзывчивость + адаптировать мобил. девайсы RegisterPage **+**

4. Изменить реакцию кота на заполнение поля, 3 состояния: 
    >4.1. Состояние неактивной формы
    
    >4.2  Состояние ошибочного поля
    
    >4.3  Состояние правильности всех полей
    
5. Переделать рот у кота, сделать его с клыками


**Страница приветствия:**

1. Добавить отзывчивость + адаптировать мобил. девайсы для HelloPage **+**


**Страница вспомнить пароль:**
1. Сделать / продумать логику работы
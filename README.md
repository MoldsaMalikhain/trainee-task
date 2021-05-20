# Здесь будут все записи по ам

Буду рад услышать любой фидбэк, дабы и дальше совершенствоваться

> Мои контакты :

    +380660343400
    roman.sh.tr@gmail.com

## Linux навигация и поиск

>1. ls -a

    Выводим список файлов что находиться в дериктории
    Флаг -a Выводит на экран так же скрытые файлы

>2. grep "404" ./access.log

        Тут с помосчью grep мы ищем все сходства в файле, и выводим их в консоль

>3. cp 404.html 403.html

        Копируем файл с содержимым и изменяем название
   
>   grep "404" ./403.html -P -I -L | xargs sed -i "s/404/403/g"
   
        Ищем все упоминания "404" в файле /403.index позже передаем значения с помощью sed, 
        где уже заменяем все найденые значения на "403"

        Флаги :
            grep
            -P Рассматривает ОБРАЗЕЦ как регулярное выражение языка Perl
            -I Обрабатывает бинарные файлы как не содержащие совпадений с ОБРАЗЦОМ
            -L Cообщает имена тех файлов, где не встретился ОБРАЗЕЦ

            sed
            -i Запись изменений

>4. sudo chgrp www-data ./index.html
    
    Меняем группу файла на www-data
    
>    sudo chmod u+rw, g+r, o-rwx
    
    Далее меняем права доступа
        u+rw : пользователь/владелец файла - чтение и запись
        g+r  : группа                      - чтение
        o-rwx: другие пользователи         - забираем все права

>5. ln -s ../../logs/access.log access.log_soft.log
    
    Создаем символическую ссылку

>6. ls -R -a / tree -a
 
    Выводим в терминал все файлы и папки
        Флаги :
            ls
            -R Рекурсивно отображать содержимое поддиректорий
            -a Выводит на экран так же скрытые файлы

            tree
            -a Выводит на экран так же скрытые файлы

>7. vim 503.html
 
        Создаем файл с помощью редактора и тут же изменяем файл

## GIT
>Задача
        
        Внести изменения в ветке dev репозитория git@example.com:example/test.git,
        добавив в корень файл Readme.md с текстом 
        ### May be in future и залить их на удаленный репозиторий. 
        Напишите набор команд для решения этой задачи с коментариями.

>Выполнение

        Для начала клонируем репозиторий, после чего переключаемся на ветку 'dev'
        Далее делаем правки, добавляем файл и редактируем его
        И под конец делаем коммит

>Комманды

        git clone ssh://git@example.com:example/test.git
        git checkout dev
        git commit -a -m 'Readme Update'
        git push

## CSS/HTML
>1. Опишите все известные вам способы позиционирования 5 элементов по центру, каждый из которых должен занимать 20%.

>2. Опишите все известные вам способы позиционирования модального окна, по центру экрана
        
        1. Если мы знаем размеры модельного окна то мы можем расположить его по центру с помощью 
        margin-left, margin-top
        2. Так же можем разместить с помощью transform: translate(50%,50%)
        3. Более интересный варинт использовать display: inline-block, поскольку очень легко 
        центровать по-горизонтали преждевременно добавив text-align: center на родительском елементе.
        Если к тому же елементу добавить свойство vertical-align: middle, то елементы 
        будут центроваться по вертикали друг относительно друга. Но в этом случае будет необходим 
        псевдоелемент

>3. Напишите стили для кнопки, которая может иметь несколько состояний: active, disabled, danger. Цвета произвольные.

        Неособо понял задачу, и уже думал писать кнопку отдельно как React модуль, дабы менять ее 
        состояния.
        Стиль кнопки вы можете найти в [./html-css/button.css]

>4. Сверстайте страницу логина, которая должна содержать только форму с полями email, password.

        Стиль формы вы можетей найти    [./html-css/login.css]
        Саму страничку вы можетей найти [./html-css/login.html]
## JS логика

        Увы смог осилить нормально только 8 задач
        В 11 через костыли кое как сделал, но так же смутило что не мог создать ассоциативный массив
        Больше всего намучался с RegExp
        Задания интересные и некоторые с подвохом


## Mongo

>Коллекция posts

        {
                "properties": {
                        "_id": { "bsonType": "objectId" },
                        "title": { "bsonType": "string" },
                        "content": { "bsonType": "string" },
                        "author": { "bsonType": "string" },
                        "like": { "bsonType": "int" },
                        "dislike": { "bsonType": "int" }
                }
        }

>Тестовые данный что я использовал

        db.posts.insertMany([
                {
                        properties:{
                                title:  "First post",
                                content: "Some kind of content that will be copied",
                                author: "Randall Gill",
                                like: 1000,
                                dislike: 30
                        }   
                },
                {
                        properties:{
                                title:  "Second post",
                                content: "Some kind of content that will be copied",
                                author: "Blaze Tickner",
                                like: 10,
                                dislike: 30
                        }
                },
                {
                        properties:{
                                title:  "Thrid post",
                                content: "Some kind of content that will be copied",
                                author: "Ron Cook",
                                like: 1,
                                dislike: 30
                        }
                },
                {
                        properties:{
                                title:  "Fourth post",
                                content: "Some kind of content that will be copied",
                                author: "Richard Chambers",
                                like: 1000,
                                dislike: 30
                        }
                },
                {
                        properties:{
                                title:  "Fifth post",
                                content: "Some kind of content that will be copied",
                                author: "Puck Lambert",
                                like: 101,
                                dislike: 30
                        }
                },
                {
                        properties:{
                                title:  "Sixth post",
                                content: "Some kind of content that will be copied",
                                author: "Hugo Crawford",
                                like: 35,
                                dislike: 30
                        }
                },
                {
                        properties:{
                                title:  "Seventh post",
                                content: "Some kind of content that will be copied",
                                author: "Blaise Reynolds",
                                like: 1000,
                                dislike: 30
                        }
                },
                {
                        properties:{
                                title:  "Eighth post",
                                content: "Some kind of content that will be copied",
                                author: "Otto Moore",
                                like: 10,
                                dislike: 30
                        }
                },
                {
                        properties:{
                                title:  "Ninth post",
                                content: "Some kind of content that will be copied",
                                author: "Merlin Cooke",
                                like: 10,
                                dislike: 30
                        }
                },
                {
                        properties:{
                                title:  "Tenth post",
                                content: "Some kind of content that will be copied",
                                author: "Lindan",
                                like: 100,
                                dislike: 30
                        }
                }
        ])

>Данный для ввода 

        {
                properties:{
                        title:  "Eleventh post",
                        content: "Some kind of content that will be copied",
                        author: "Gwydion Greenwood",
                        like: 325,
                        dislike: 30
                }   
        },

>1. Выведите 5 записей из коллекции posts пропустив первые 5

        Выводим каталог, пропускаем первые 5 элементов и ограничиваем вывод до 5ти элементов

        db.posts.find({}).skip(5).limit(5)

>2. Выведите все записи у которых like больше 100

        Выводим все элементы у которых like > 100

        db.posts.find({"properties.like": {$gt: 100}})

>3. Добавьте новую запись в коллекцию posts

        Добавляем документ в коллекцию posts

        db.posts.insertOne({...}) //данные для ввода указаны выше

>4. Выведите список авторов и их общее количество like

        Выводим список авторов и их лайки

        db.posts.find({}, {"_id": 0, "properties.title": 0, "properties.dislike": 0, "properties.content": 0,})

        выводим список авторов и их общее количество лайков

        db.post.aggregate([{
                $group:{
                        _id:{author:"$properties.author"},
                        like:{$sum:"$properties.like"}
                }
        }])

## Итоги

Выполнять задачи было интересно, и проблем в основном не было, больше всего времени потратил на JS, поскольку с ассоциативными массивами дела я еще не имел, а RegExp это злая вещь
Очень сильно надеюсь что вас удавлетворит данный результат

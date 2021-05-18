# Здесь будут все записи по задаче

Буду рад услышать любой фидбэк, дабы и дальше совершенствоваться

> Мои контакты :

    +380660343400
    kerch999@gmail.com

## Linux навигация и поиск

>1. ls -a

    Выводим список файлов что находиться в дериктории
    Флаг -a Выводит на экран так же скрытые файлы

>2. grep "404" ./access.log

        Тут с помосчью grep мы ищем все сходства в файле, и выводим их в консоль

>3. cp 404.html 403.html

        Копируем файл с содержимым и изменяем название
   
>   grep "404" ./403.html -P -I -L | xargs sed -i "s/404/403/g"
   
        Ищем все упоминания "404" в файле /403.index позже передаем значения с помощью sed, где уже заменяем все найденые значения на "403"

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

The minimum requirement by Yii is that your Web server supports
PHP 5.1.0 or above. Yii has been tested with Apache HTTP server
on Windows and Linux operating systems.

Please access the following URL to check if your Web server reaches
the requirements by Yii, assuming "YiiPath" is where Yii is installed:

      http://hostname/YiiPath/requirements/index.php

## CSS/HTML

Yii comes with a command line tool called "yiic" that can create
a skeleton Yii application for you to start with.

On command line, type in the following commands:

        $ cd YiiPath/framework                (Linux)
        cd YiiPath\framework                  (Windows)

        $ ./yiic webapp ../testdrive          (Linux)
        yiic webapp ..\testdrive              (Windows)

The new Yii application will be created at "YiiPath/testdrive".
You can access it with the following URL:

        http://hostname/YiiPath/testdrive/index.php

## WHAT'S NEXT

Please visit the project website for tutorials, class reference
and join discussions with other Yii users.

The Yii Developer Team
http://www.yiiframework.com

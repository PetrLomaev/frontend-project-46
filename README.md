### Hexlet tests and linter status:
[![Actions Status](https://github.com/PetrLomaev/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/PetrLomaev/frontend-project-46/actions)


[![Maintainability](https://api.codeclimate.com/v1/badges/313c723c915c787826eb/maintainability)](https://codeclimate.com/github/PetrLomaev/frontend-project-46/maintainability)


[![Test Coverage](https://api.codeclimate.com/v1/badges/313c723c915c787826eb/test_coverage)](https://codeclimate.com/github/PetrLomaev/frontend-project-46/test_coverage)


## Описание проекта

Проект содержит в себе программу gendiff, которая сравнивает два конфигурационных файла путём приёма через командную строку двух аргументов — путей до этих файлов. Поддерживает работу форматов файлов: .json, .yml(.yaml).

Результат сравнения файлов может выводиться в форматах:

- stylish (по умолчанию)

- plain

- JSON


## Минимальные системные требования

Командная строка Node.js


## Установка 

`nmp ci ./bin/gendiff.js`

`npm link ./bin/gendiff.js`

## Запуск

`gendiff -h` - показать справку

`gendiff filepath1.json filepath2.json` - показать различия двух файлов в формате "stylish" (формат по умолчанию), где <filepath1.json> и  <filepath2.json> - относительный или абсолютный пути до .json или .yml(.yaml) файла

`gendiff --format stylish filepath1.json filepath2.json` - показать различия двух файлов с указанием конкретного вывода в формате "stylish", где <filepath1.json> и  <filepath2.json> - относительный или абсолютный пути до .json или .yml(.yaml) файла.

Вызов с флагом `--format plain` (`-f plain`) выведет различия в формате "plain".

Вызов с флагом `--format json` (`-f json`) выведет различия в формате "json".



Посмотреть пример работы программы gendiff с плоскими файлами file1.json file2.json в формате "stylish":

[![asciicast](https://asciinema.org/a/624803.svg)](https://asciinema.org/a/624803)


Посмотреть пример работы программы gendiff с плоскими файлами file1.yaml file2.yaml в формате "stylish":

[![asciicast](https://asciinema.org/a/625742.svg)](https://asciinema.org/a/625742)


Посмотреть пример работы программы gendiff с вложенными файлами file1.yaml file2.yaml в формате "stylish":

[![asciicast](https://asciinema.org/a/627007.svg)](https://asciinema.org/a/627007)


Посмотреть пример работы программы gendiff с вложенными файлами file1.yaml file2.yaml в формате "plain":

[![asciicast](https://asciinema.org/a/627213.svg)](https://asciinema.org/a/627213)


Посмотреть пример работы программы gendiff с вложенными файлами file1.yaml file2.yaml в формате "json":

[![asciicast](https://asciinema.org/a/627339.svg)](https://asciinema.org/a/627339)


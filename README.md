### Hexlet tests and linter status:
[![Actions Status](https://github.com/PetrLomaev/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/PetrLomaev/frontend-project-46/actions)


[![Maintainability](https://api.codeclimate.com/v1/badges/313c723c915c787826eb/maintainability)](https://codeclimate.com/github/PetrLomaev/frontend-project-46/maintainability)





## Описание проекта

The project contains "gendiff" program, which compares two configuration files by receiving two arguments via the command line - the paths to these files. Supports file formats: .json, .yml(.yaml).

The result of file comparison can be output in the following formats:

- stylish (default format)

- plain

- JSON


## Minimum System Requirements

Node.js Command Line


## Install 

`nmp i ./bin/gendiff.js`

`npm link ./bin/gendiff.js`

## Run

`gendiff -h` - show reference

`gendiff filepath1.json filepath2.json` - show differences between two files in "stylish" format (default format), where <filepath1.json> and <filepath2.json> are relative or absolute paths to the .json or .yml(.yaml) file

`gendiff --format stylish filepath1.json filepath2.json` - show differences between two files, indicating specific output in "stylish" format, where <filepath1.json> and <filepath2.json> are relative or absolute paths to the .json or .yml(.yaml) file.

Call with a flag `--format plain` (`-f plain`) will output differences in format "plain".

Call with a flag `--format json` (`-f json`) will output differences in format "json".



View an example of the gendiff program working with flat files file1.json file2.json in the "stylish" format:

[![asciicast](https://asciinema.org/a/624803.svg)](https://asciinema.org/a/624803)


View an example of the gendiff program working with flat files file1.yaml file2.yaml in the "stylish" format:

[![asciicast](https://asciinema.org/a/625742.svg)](https://asciinema.org/a/625742)


View an example of the gendiff program working with attached files file1.yaml file2.yaml in the "stylish" format:

[![asciicast](https://asciinema.org/a/627007.svg)](https://asciinema.org/a/627007)


View an example of the gendiff program working with attached files file1.yaml file2.yaml in the "plain" format:

[![asciicast](https://asciinema.org/a/627213.svg)](https://asciinema.org/a/627213)


View an example of the gendiff program working with attached files file1.yaml file2.yaml in the "json" format:

[![asciicast](https://asciinema.org/a/627339.svg)](https://asciinema.org/a/627339)


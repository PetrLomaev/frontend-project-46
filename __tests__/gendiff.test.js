/* eslint-disable no-undef */
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const fixtPathToFile1Json = getFixturePath('file1.json');
const fixtPathToFile2Json = getFixturePath('file2.json');

const fixtPathToFile1Yaml = getFixturePath('file1.yaml');
const fixtPathToFile2Yaml = getFixturePath('file2.yaml');

const expectFile12JsonFdefault = genDiff(fixtPathToFile1Json, fixtPathToFile2Json);
const expectFile12YamlFdefault = genDiff(fixtPathToFile1Yaml, fixtPathToFile2Yaml);

const expectFile12JsonFstylish = genDiff(fixtPathToFile1Json, fixtPathToFile2Json, 'stylish');
const expectFile12YamlFstylish = genDiff(fixtPathToFile1Yaml, fixtPathToFile2Yaml, 'stylish');

const expectFile12JsonFplain = genDiff(fixtPathToFile1Json, fixtPathToFile2Json, 'plain');
const expectFile12YamlFplain = genDiff(fixtPathToFile1Yaml, fixtPathToFile2Yaml, 'plain');

const expectFile12JsonFjson = genDiff(fixtPathToFile1Json, fixtPathToFile2Json, 'json');
const expectFile12YamlFjson = genDiff(fixtPathToFile1Yaml, fixtPathToFile2Yaml, 'json');

test('flat and nested files test', () => {
  expect(expectFile12JsonFdefault).toEqual(readFile('file1-2nested_stylish_result.yml'));
  expect(expectFile12YamlFdefault).toEqual(readFile('file1-2nested_stylish_result.yml'));
  expect(expectFile12JsonFstylish).toEqual(readFile('file1-2nested_stylish_result.yml'));
  expect(expectFile12YamlFstylish).toEqual(readFile('file1-2nested_stylish_result.yml'));
  expect(expectFile12JsonFplain).toEqual(readFile('file1-2nested_plain_result.yml'));
  expect(expectFile12YamlFplain).toEqual(readFile('file1-2nested_plain_result.yml'));
  expect(expectFile12JsonFjson).toEqual(readFile('file1-2nested_json_result.yml'));
  expect(expectFile12YamlFjson).toEqual(readFile('file1-2nested_json_result.yml'));
});

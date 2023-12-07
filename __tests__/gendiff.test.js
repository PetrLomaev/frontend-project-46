import genDiff from '../src/index.js';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('flat file test', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(readFile('file1-2json_result.yml'));
  expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'))).toEqual(readFile('file1-2json_result.yml'));
});
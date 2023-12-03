import { program } from 'commander';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const getDiff = () => {
  program
    .name('gendiff')
    .version('0.0.1')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format <type>', 'output format')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .action((filepath1, filepath2) => {
    // const filepath1Resolve = path.resolve(filepath1); //относительный путь? если аргумент начинается с косой черты, то это абсолютный путь.
    // const filepath2Resolve = path.resolve(filepath2);
    // const filepath1Cwd = process.cwd(filepath1); //абсолютный путь?
    // const filepath2Cwd = process.cwd(filepath2);
    // const readFile1 = fs.readFileSync(filepath1Resolve);
      const data1 = JSON.parse(fs.readFileSync(path.resolve(filepath1)));

      const data2 = JSON.parse(fs.readFileSync(path.resolve(filepath2)));

      const keys1 = Object.keys(data1);

      const keys2 = Object.keys(data2);

      const keys = (_.union(keys1, keys2)).sort();

      const mapped = keys.map((key) => {
        if (!Object.hasOwn(data1, key)) {
          return `  + ${key}: ${data2[key]}`;
        } if (!Object.hasOwn(data2, key)) {
          return `  - ${key}: ${data1[key]}`;
        } if (data1[key] !== data2[key]) {
          return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
        }
        return `    ${key}: ${data1[key]}`;
      });
      const result = `{\n${mapped.join('\n')}\n}`;
      console.log(result);
    })
    .parse(process.argv);
};

export default getDiff;

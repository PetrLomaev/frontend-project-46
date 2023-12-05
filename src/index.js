import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const genDiff = (path1, path2) => {
  const data1 = JSON.parse(fs.readFileSync(path.resolve(path1), 'utf-8'));

  const data2 = JSON.parse(fs.readFileSync(path.resolve(path2), 'utf-8'));

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
  return result;
};

export default genDiff;

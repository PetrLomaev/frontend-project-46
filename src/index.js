import _ from 'lodash';
import getParser from './parsers.js';

const genDiff = (path1, path2) => {
  const data1 = getParser(path1);

  const data2 = getParser(path2);

  const copyOfData1 = _.cloneDeep(data1);
  const copyOfData2 = _.cloneDeep(data2);

  const keys1 = Object.keys(copyOfData1);

  const keys2 = Object.keys(copyOfData2);

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

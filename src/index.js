import getParser from './parsers.js';
import getDiffObject from './tools.js';
import diffToFormat from './formatters/index.js';

const genDiff = (path1, path2, formatName = 'stylish') => {
  const data1 = getParser(path1);

  const data2 = getParser(path2);

  const diffData1Data2 = getDiffObject(data1, data2);

  const result = diffToFormat(diffData1Data2, formatName);
  return result;
};

export default genDiff;

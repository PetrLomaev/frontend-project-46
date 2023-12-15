import getParser from './parsers.js';
import getDiffObject from './tools.js';
import genStylish from './stylish.js';

const genDiff = (path1, path2, format = 'stylish') => {
  const data1 = getParser(path1);

  const data2 = getParser(path2);

  const diffData1Data2 = getDiffObject(data1, data2);

  const final = genStylish(diffData1Data2);
  return final;
};

export default genDiff;

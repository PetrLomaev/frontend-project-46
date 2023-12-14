import _ from 'lodash';
// import getParser from './parsers.js';

const genStylish = (tree) => {
  const iter = (obj, depth) => {
    const result = obj.map((value) => {
      if (value.type === 'deleted') {
        return `  - ${value.key}: ${value.oldValue}`;
      } if (value.type === 'added') {
        return `  + ${value.key}: ${value.newValue}`;
      } if (value.type === 'deep') {
        return `${iter(value.child, depth + 1)}`;
      } if (value.type === 'changed') {
        return `  - ${value.key}: ${value.oldValue}\n  + ${value.key}: ${value.newValue}`;
      }
      return `    ${value.key}: ${value.oldValue}`;
    });
    return `{\n${result.join('\n')}\n}`;
  };
  return iter(tree, 0);
};

export default genStylish;

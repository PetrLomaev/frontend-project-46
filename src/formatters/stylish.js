import _ from 'lodash';

const getSpace = (depth) => {
  const space = '    ';
  if (depth === 0) {
    return '';
  }
  return space.repeat(depth);
};

const stringify = (value, layer) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }
    const lines = Object.entries(currentValue).map(([key, val]) => `${getSpace(depth + 1)}    ${key}: ${iter(val, depth + 1)}`);
    return ['{', ...lines, `${getSpace(depth + 1)}}`].join('\n');
  };
  return iter(value, layer);
};

const genStylish = (tree) => {
  const iter = (obj, depth) => {
    const result = obj.map((value) => {
      if (value.type === 'deleted') {
        return `${getSpace(depth)}  - ${value.key}: ${stringify(value.oldValue, depth)}`;
      } if (value.type === 'added') {
        return `${getSpace(depth)}  + ${value.key}: ${stringify(value.newValue, depth)}`;
      } if (value.type === 'nested') {
        return `${getSpace(depth)}    ${value.key}: ${iter(value.children, depth + 1)}`;
      } if (value.type === 'changed') {
        return `${getSpace(depth)}  - ${value.key}: ${stringify(value.oldValue, depth)}\n${getSpace(depth)}  + ${value.key}: ${stringify(value.newValue, depth)}`;
      }
      return `${getSpace(depth)}    ${value.key}: ${stringify(value.oldValue, depth)}`;
    });
    return ['{', ...result, `${getSpace(depth)}}`].join('\n');
  };
  return iter(tree, 0);
};

export default genStylish;

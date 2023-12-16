import _ from 'lodash';

const elemToString = (elem) => {
  if (_.isObject(elem)) {
    return '[complex value]';
  }
  if (typeof elem === 'string') {
    return `'${elem}'`;
  }
  return `${elem}`;
};

const genPlain = (tree) => {
  const iter = (obj, pathName) => {
    const result = obj.flatMap((value) => {
      const fullPathToKey = `${pathName}${value.key}`;
      if (value.type === 'deleted') {
        return `Property '${fullPathToKey}' was removed`;
      } if (value.type === 'added') {
        return `Property '${fullPathToKey}' was added with value: ${elemToString(value.newValue)}`;
      } if (value.type === 'nested') {
        return iter(value.children, `${fullPathToKey}.`);
      } if (value.type === 'changed') {
        return `Property '${fullPathToKey}' was updated. From ${elemToString(value.oldValue)} to ${elemToString(value.newValue)}`;
      }
      return null;
    });
    return result.filter((elem) => elem !== null).join('\n');
  };
  return iter(tree, '');
};
export default genPlain;

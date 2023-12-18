import _ from 'lodash';

const getDiffObject = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);

  const keys2 = Object.keys(obj2);

  const keys = _.sortBy(_.union(keys1, keys2));
  const result = keys.map((key) => {
    const oldValue = obj1[key];

    const newValue = obj2[key];
    if (!Object.hasOwn(obj2, key)) {
      return {
        type: 'deleted',
        key,
        oldValue,
      };
    }
    if (!Object.hasOwn(obj1, key)) {
      return {
        type: 'added',
        key,
        newValue,
      };
    }
    if (_.isObject(oldValue) && _.isObject(newValue)) {
      return {
        type: 'nested',
        key,
        children: getDiffObject(oldValue, newValue),
      };
    }
    if (obj1[key] !== obj2[key]) {
      return {
        type: 'changed',
        key,
        oldValue,
        newValue,
      };
    }
    return {
      type: 'unchanged',
      key,
      oldValue,
    };
  });
  return result;
};

export default getDiffObject;

import genStylish from './stylish.js';
import genPlain from './plain.js';

const diffToFormat = (tree, formatName = 'stylish') => {
  switch (formatName) {
    case 'stylish':
      return genStylish(tree);
    case 'plain':
      return genPlain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error('Undefined format');
  }
};
export default diffToFormat;

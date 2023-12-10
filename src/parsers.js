import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getParser = (filepath) => {
  const format = path.extname(filepath);
  if (format === '.json' || format === '') {
    return JSON.parse(fs.readFileSync(path.resolve(filepath), 'utf-8'));
  } if (format === '.yml' || format === '.yaml') {
    return yaml.load(fs.readFileSync(path.resolve(filepath), 'utf-8'));
  }
  throw new Error('Unknown format');
};

export default getParser;

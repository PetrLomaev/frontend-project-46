#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/index.js';
// import genStylish from '../src/stylish.js';

program
  .name('gendiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    genDiff(filepath1, filepath2);
  })
  .parse(process.argv);

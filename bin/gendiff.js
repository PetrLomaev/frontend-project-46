#!/usr/bin/env node
import { program } from 'commander';

program
  //.name('gendiff')
  .version('0.0.1')
  .arguments('<filepath1>', '<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .action('')
  .parse(process.argv);

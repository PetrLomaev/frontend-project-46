import { program } from 'commander';
import fs from 'fs';
import path from 'path';


const getDiff = () => {
program
  .name('gendiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  /*
   .action((filepath1, filepath2) => {
    const filepath1Resolve = path.resolve(filepath1); //относительный путь? если аргумент начинается с косой черты, то это абсолютный путь. 
    const filepath2Resolve = path.resolve(filepath2);
    const filepath1Cwd = process.cwd(filepath1); //абсолютный путь?
    const filepath2Cwd = process.cwd(filepath2);
    const readFile1 = fs.readFileSync(filepath1Resolve);
    const par1 = JSON.parse(readFile1);
    //const result = `${filepath1} ${filepath2} ${option.format}`;
    console.log('filepath1Resolve', filepath1Resolve);
    console.log('filepath2Resolve', filepath2Resolve);
    console.log('readFile', readFile1);
    console.log('par', par1);
    console.log('filepath1Cwd', filepath1Cwd);
    console.log('filepath2Cwd', filepath2Cwd);
  })
  */

  .parse(process.argv);
};

export default getDiff;

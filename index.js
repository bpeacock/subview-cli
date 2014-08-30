#!/usr/bin/env node

var program     = require('commander'),
    packageJSON = require('./package.json');

var args = process.argv.slice(2);

program
  .version(packageJSON.version)
  .usage('[command] [options]')
  .parse(process.argv);

if(args[0] === 'build') {

}
else if(args[0] === 'test') {

}
else if(args[0] === 'create') {
  args.shift();
  require('./src/create').apply(null, args);
}
else if(args[0] === 'refactor') {

}
else {
  console.error('Subview requires a command. For help run `subview -h`.');
}

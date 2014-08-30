var fs = require('fs');

module.exports = function(name) {
  var folder = process.cwd();

  function addFile(extension, contents) {
    fs.writeFileSync(folder+'/'+name+'/'+name+'.'+extension, contents || '');
  }

  fs.mkdirSync(folder+'/'+name);

  addFile('js');
  addFile('less');
  addFile('jade');
  addFile('test.js');
};

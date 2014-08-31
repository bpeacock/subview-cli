var fs = require('fs'),
    boilerplate = {
      js: fs.readFileSync(__dirname+'/boilerplate.js')
    };

module.exports = function(name) {
  var folder = process.cwd();

  function addFile(extension, contents) {
    fs.writeFileSync(folder+'/'+name+'/index.'+extension, contents || '');
  }

  fs.mkdirSync(folder+'/'+name);

  addFile('js', boilerplate.js);
  addFile('less');
  addFile('jade');
  addFile('test.js');
};

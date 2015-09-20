module.exports = plugin;

function plugin(attrs) {
  attrs = attrs || [];
  
  return function(files, metalsmith, done) {
    var data;
    for (file in files) {
      if (files.hasOwnProperty(file)) {
        data = files[file];
        console.log('\n====================')
        console.log('FILE:\n' + file + '\n');
        for (var i = 0; i < attrs.length; i++) {
          if (data[attrs[i]]) {
            console.log(attrs[i].toUpperCase() + ':\n' + data[attrs[i]] + '\n');
          }
        }
      }
    }
    done();
  }
}

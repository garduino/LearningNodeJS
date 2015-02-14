var lslib = require('./lynode6module');

var dirname = process.argv[2];
var ext = process.argv[3];

lslib(dirname, ext, function(err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});


// Solución oficial
//    var filterFn = require('./solution_filter.js')
//    var dir = process.argv[2]
//    var filterStr = process.argv[3]
    
//    filterFn(dir, filterStr, function (err, list) {
//      if (err)
//        return console.error('There was an error:', err)
    
//      list.forEach(function (file) {
//        console.log(file)
//      })
//    })


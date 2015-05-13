var pa11y = require('pa11y');
var con = require('./node_modules/pa11y/lib/reporters/console.js');

var url = 'http://openwest.org';

pa11y.sniff({
      url: url
}, function (err, results) {
      con.handleResult(results); // Print results using the console formatted report script
});

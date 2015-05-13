var pad = require('./custom_modules/pad');
var casper = require('casper').create();


casper.start('http://openwest.org');

casper.then(function () {
    casper.echo(casper.getCurrentUrl()); // Print the current URL
    pad.altText();                       // Print how many images have the alt attribute
});

casper.run();

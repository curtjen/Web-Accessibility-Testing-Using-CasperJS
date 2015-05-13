var require = patchRequire(require);
var Casper  = require('casper');

/**
 * Retrieves all elements of a specified selector on the current page, if any.
 * @param  String  selector  A DOM CSS3/XPath selector 
 * @return Object
 */
//exports.getElementsBySelector = function getElementsBySelector (selector) {
Casper.prototype.getElementsBySelector = function getElementsBySelector (selector) {
    "use strict";
    this.checkStarted();
    if (!this.exists(selector)) {
        throw new CasperError(f("No elements found with selector: %s.", selector));
    }
    return this.evaluate(function _evaluate(selector) {
        return document.querySelectorAll(selector);
    }, selector);
};

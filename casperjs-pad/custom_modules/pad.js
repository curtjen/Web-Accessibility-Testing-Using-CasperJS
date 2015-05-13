/* Custom CasperJS modules for accessibility testing
 *
 */

/**
 * Retrieves all elements of a specified selector on the current page, if any.
 * @param  String  selector  A DOM CSS3/XPath selector 
 * @return Object
 */
var getElementsBySelector = function getElementsBySelector (selector) {
    "use strict";
    //this.checkStarted();
    if (!casper.exists(selector)) {
        throw new CasperError(f("No elements found with selector: %s.", selector));
    }
    return casper.evaluate(function _evaluate(selector) {
        return document.querySelectorAll(selector);
    }, selector);
};


/**
 * Retrieves all elements of a specified selector and alt attribute on the current page, if any.
 * @param  String  selector  A DOM CSS3/XPath selector 
 * @param  String  attribute A DOM CSS3/XPath selector
 * @return Object
 */
function getSelectorAttributes(selector, attr) {
    return casper.evaluate(function(selector, attr) {
        var objects = document.querySelectorAll(selector);
        return attr
            ? Array.prototype.map.call(objects, function(e) {
                return e.getAttribute(attr);
            })
            : objects;
    }, selector, attr);
}


/**
 * Check that alt attribute exists on images
 *
 */
exports.altText = function () {
    "use strict";
    var imgs = getElementsBySelector('img');
    var alts = getSelectorAttributes('img', 'alt');
    //test.assertEquals(alts.length, imgs.length, 'Images with alt text ' + alts.length + '/' + imgs.length);
    casper.echo('Images with alt text ' + alts.length + '/' + imgs.length);

};

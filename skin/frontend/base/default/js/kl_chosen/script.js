document.observe('dom:loaded', function() {
  $$('select').each(function(s) {
    new Chosen(s);
  });
});

/**
 * Trigger liszt:updated after fillSelect for configurable products
 */
if (typeof Product.Config != 'undefined') {
  Product.Config.prototype.magentoFillSelect = Product.Config.prototype.fillSelect;
  Product.Config.prototype.fillSelect = function(element) {
    this.magentoFillSelect(element);
    Event.fire($(element), "liszt:updated");
  }
}
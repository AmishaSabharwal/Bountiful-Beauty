"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Product =
/*#__PURE__*/
function () {
  function Product(data) {
    _classCallCheck(this, Product);

    this.data = data;
    this.quantity = 0;
  }

  _createClass(Product, [{
    key: "html",
    value: function html() {
      // get the fields from the product data
      var _this$data$fields = this.data.fields,
          title = _this$data$fields.title,
          description = _this$data$fields.description,
          price = _this$data$fields.price; // create the section that will display the overall quantity
      // and "add to cart" button

      this.quantityHTML = $("<span></span>");
      var addToCart = $("<button>Add to cart</button>").click( // the `addToCart` method has to be implemented
      this.addToCart.bind(this));
      addToCart.append(this.quantityHTML); // create the HTML template of the product

      var elem = $("<div class=\"product\">\n        <div class=\"title\">".concat(title, "</div>\n        <div class=\"description\">").concat(description, "</div>\n        <div class=\"price\">$").concat(price, "</div>\n    \t</div>")).append(addToCart); // the addToCart section is appended to each product at the end

      return elem;
    }
  }]);

  return Product;
}(); // call the products endpoint we just created


fetch("/products").then(function (res) {
  return res.json();
}).then(function (data) {
  // if successful, loop through each item and append its
  // HTML output to the product catalog div
  data.data.forEach(function (item) {
    var product = new Product(item);
    $(".product-catalog").append(product.html());
  });
})["catch"](function (err) {
  return console.error(err);
});
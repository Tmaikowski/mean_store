var mongoose = require('mongoose');

var Product = mongoose.model('Product');

module.exports = {
  index: function(req, res) {
    Product.find({}).exec(function(err, products) {
      if (err) {
        console.log("!!ERROR IN PRODUCT INDEX!!");
        return res.json(err);
      }
      return res.json(products);
    })
  },

  create: function(req, res) {
    var product = new Product({
      name: req.body.name,
      imgUrl: req.body.imgUrl,
      description: req.body.description,
      quantity: req.body.quantity
    });
    product.save(function(err) {
      if (err) {
        console.log("!!ERROR IN PRODUCT SAVE!!")
        return res.json(err);
      }
      return res.json(product);
    })
  }
};

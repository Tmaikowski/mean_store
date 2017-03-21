var mongoose = require('mongoose');

var Order = mongoose.model('Order');
var Product = mongoose.model('Product');
var Customer = mongoose.model('Customer');

module.exports = {
  index: function(req, res) {
    Order.find({}).exec(function(err, docs) {
      if (err) {
        console.log("!!ERROR IN ORDER INDEX!!");
        return res.json({error: err});
      }
      return res.json(docs);
    });
  },

  create: function(req, res) {
    console.log(req.body);
    Customer.findById(req.body.customerId, function(err, customer) {
      if (err) {
      console.log("HERE1");
        return res.json(err);
      }
      Product.findById(req.body.productId, function(err, product) {
        if (err) {
          return res.json(err);
        }
        if (req.body.productQuantity > product.quantity) {
          return res.json({
            error: {
              message: "Not enough of that item in stock"
            }
          })
        }
        var order = new Order({
          customerName: customer.name,
          productName: product.name,
          productQuantity: req.body.productQuantity
        });
        order.save(function(err) {
          if (err) {
            return res.json(err);
          }
          //reduce product quantity by amount ordered
          product.quantity = product.quantity - order.productQuantity;
          product.save(function(err) {
            if (err) {
              console.log("SOMETHING WRONG - UPDATE PRODUCT QUANTITY");
              return res.json(err);
            }
          })
          return res.json(order);
        });
      });
    });
  }
};

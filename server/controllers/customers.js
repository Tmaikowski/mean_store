var mongoose = require('mongoose');

var Customer = mongoose.model('Customer');

module.exports = {
  index: function(req, res) {
    Customer.find({}).exec(function(err, docs) {
      if (err) {
        console.log("!!ERROR IN CUSTOMER INDEX!!");
        return res.json({error: err});
      }
      return res.json(docs);
    })
  },

  create: function(req, res) {
    var customer = new Customer({
      name: req.body.name
    });
    customer.save(function(err) {
      if (err) {
        console.log("!!ERROR IN CUSTOMER CREATE!!");
        return res.json({error: err});
      }
      return res.json(customer);
    })
  },

  destroy: function(req, res) {
    Customer.remove({_id: req.params.id}, function(err) {
      if (err) {
        console.log("!!ERROR IN CUSTOMER DESTROY!!");
        return res.json({error: err});
      }
      return res.json({success: "Success"});
    })
  }
};

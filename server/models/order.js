var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },

  productName: {
    type: String,
    required: true
  },

  productQuantity: {
    type: Number,
    required: true
  }
}, {timestamps: true});

var Order = mongoose.model('Order', OrderSchema)

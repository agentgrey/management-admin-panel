const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  customerName: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  product: {  
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product', 
    required: true 
  },
  orderStatus: {
    type: String,
    enum: ['pending', 'delivered', 'cancelled'],
    default: 'pending'
  }
},{ timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
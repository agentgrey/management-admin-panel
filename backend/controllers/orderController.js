const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  try {
    const { product } = req.body;
    const order = new Order({
      customerName: req.user.id, // User ID from auth middleware
      product,
    });
    await order.save();
    res.json({ msg: 'Order placed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.cancelOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus: 'cancelled' },
      { new: true }
    );
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('customerName product');
        res.json(orders);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
    }
};
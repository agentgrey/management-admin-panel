const Order = require('../models/order');

exports.placeOrder = async (req, res) => {
  try {
    const { product } = req.body;
    const order = new Order({
      customerName: req.user.id,
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
        const orderDetails = await Order.find().populate('customerName product');
        let orders = orderDetails.map(order => ({
          id: order._id,
          customerName: order.customerName ? order.customerName.name : 'Unknown Customer',
          customerEmail: order.customerName ? order.customerName.email : 'Unknown Customer',
          productName: order.product ? order.product.name : 'Unknown Product',
          quantity: 1,
          price: order.product ? order.product.price : 0, 
          status: order.orderStatus,
          orderDate: order.createdAt.toISOString() 
        }));
        res.json(orders);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
    }
};
const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, image } = req.body;
    const product = new Product({
      name,
      description,
      price,
      image,
    });
    await product.save();
    res.json({ msg: 'Product created' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.editProduct = async (req, res) => {
  try {
    const { name, description, price, image } = req.body;
    const productFields = {};
    if (name) productFields.name = name;
    if (description) productFields.description = description;
    if (price) productFields.price = price;
    if (image) productFields.image = image;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: productFields },
      { new: true }
    );
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Product deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
    }
};
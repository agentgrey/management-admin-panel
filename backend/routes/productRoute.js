const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middlewares/auth');

router.post('/', auth, productController.addProduct);
router.put('/:id', auth, productController.editProduct);
router.delete('/:id', auth, productController.deleteProduct);
router.get('/', productController.getAllProducts); 

module.exports = router;
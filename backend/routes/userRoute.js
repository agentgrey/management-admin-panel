const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

router.post('/', auth, userController.addUser);
router.put('/:id', auth, userController.editUser);
router.delete('/:id', auth, userController.deleteUser); 
router.get('/', auth, userController.getAllUsers);

module.exports = router;
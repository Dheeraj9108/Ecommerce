const express = require('express');
const { requireSigin, userMiddleware } = require('../comonMiddleware');
const router = express.Router();
const { addItemToCart } = require('../controller/cart');


router.post('/user/cart/addtocart',requireSigin,userMiddleware,addItemToCart)

module.exports = router;
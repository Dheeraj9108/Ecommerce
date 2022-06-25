const express = require('express');
const { requireSigin, adminMiddleware } = require('../comonMiddleware');
const router = express.Router();
const { addCategory, getCategories } = require('../controller/category');


router.post('/category/create',requireSigin,adminMiddleware,addCategory)
router.get('/category/getcategory',getCategories);

module.exports = router;
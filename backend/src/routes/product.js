const express = require('express');
const { requireSigin, adminMiddleware } = require('../comonMiddleware');
const { createProduct } = require('../controller/product');
const multer = require('multer');
const router = express.Router();
const Product = require('../models/product')
const shortid = require('shortid');
const path = require('path');
// const { addCategory, getCategories } = require('../controller/category');

const storage = multer.diskStorage({

    destination:function(req,file,cb){
        cb(null,path.join(path.dirname(__dirname),'uploads'))
    },
    filename:function(req,file,cb){
        cb(null,shortid.generate() + '-' + file.originalname);
    }
})

const upload = multer({storage});

router.post('/product/create',requireSigin,adminMiddleware,upload.array('productPicture'),createProduct)
// router.get('/category/getcategory',getCategories);

module.exports = router;
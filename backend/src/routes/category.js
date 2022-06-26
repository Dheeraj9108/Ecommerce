const express = require('express');
const { requireSigin, adminMiddleware } = require('../comonMiddleware');
const router = express.Router();
const { addCategory, getCategories } = require('../controller/category');
const Product = require('../models/product')
const shortid = require('shortid');
const path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({

    destination:function(req,file,cb){
        cb(null,path.join(path.dirname(__dirname),'uploads'))
    },
    filename:function(req,file,cb){
        cb(null,shortid.generate() + '-' + file.originalname);
    }
})

const upload = multer({storage});



router.post('/category/create',requireSigin,adminMiddleware,upload.single('categoryImage'),addCategory)
router.get('/category/getcategory',getCategories);

module.exports = router;
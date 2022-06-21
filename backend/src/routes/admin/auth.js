const express = require("express");
const { signup, signin, requireSigin } = require("../../controller/admin/auth");

const router = express.Router();


router.post('/admin/signup', signup);
router.post('/admin/signin', signin);


// router.post('/profile', requireSigin,(req,res)=>{
//     res.status(200).json({user:"profile"})
// });

module.exports = router;
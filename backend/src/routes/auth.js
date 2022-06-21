const express = require("express");
const { signup, signin, requireSigin } = require("../controller/auth");

const router = express.Router();


router.post('/signup', signup);
router.post('/signin', signin);


// router.post('/profile', requireSigin,(req,res)=>{
//     res.status(200).json({user:"profile"})
// });

module.exports = router;
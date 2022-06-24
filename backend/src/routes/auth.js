const express = require("express");
const { signup, signin, requireSigin } = require("../controller/auth");

const { validateRequest, isRequestValidated } = require("../validator/auth");

const router = express.Router();


router.post('/signup',validateRequest,isRequestValidated,signup);
router.post('/signin', signin);


// router.post('/profile', requireSigin,(req,res)=>{
//     res.status(200).json({user:"profile"})
// });

module.exports = router;
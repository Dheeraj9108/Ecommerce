const express = require("express");
const { requireSigin } = require("../comonMiddleware");
const { signup, signin, signout} = require("../controller/auth");

const {isRequestValidated, validateSignupRequest, validateSigninRequest } = require("../validator/auth");

const router = express.Router();


router.post('/signup',validateSignupRequest,isRequestValidated,signup);
router.post('/signin',validateSigninRequest,isRequestValidated,signin);
router.post('/signout',requireSigin,signout);


// router.post('/profile', requireSigin,(req,res)=>{
//     res.status(200).json({user:"profile"})
// });

module.exports = router;
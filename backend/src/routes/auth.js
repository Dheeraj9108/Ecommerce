const express = require("express");
const { signup, signin} = require("../controller/auth");

const {isRequestValidated, validateSignupRequest, validateSigninRequest } = require("../validator/auth");

const router = express.Router();


router.post('/signup',validateSignupRequest,isRequestValidated,signup);
router.post('/signin',validateSigninRequest,isRequestValidated,signin);


// router.post('/profile', requireSigin,(req,res)=>{
//     res.status(200).json({user:"profile"})
// });

module.exports = router;
const express = require("express");
const { requireSigin } = require("../../comonMiddleware");
const { signup, signin, signout } = require("../../controller/admin/auth");
const { isRequestValidated, validateSignupRequest, validateSigninRequest } = require("../../validator/auth");

const router = express.Router();


router.post('/admin/signup',validateSignupRequest,isRequestValidated, signup);
router.post('/admin/signin',validateSigninRequest,isRequestValidated, signin);
router.post('/admin/signout',signout);

// router.post('/profile', requireSigin,(req,res)=>{
//     res.status(200).json({user:"profile"})
// });

module.exports = router;
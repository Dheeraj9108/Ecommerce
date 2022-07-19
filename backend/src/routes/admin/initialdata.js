const express = require("express");
const { initialdata } = require("../../controller/admin/initialdata");
const router = express.Router();


router.post('/initialdata',initialdata)


module.exports = router;
const express=require('express');
const router=express.Router();
const authcontroller =require('../controllers/auth-contoller');
const validate=require("../middleware/validate-middleware");
const signupSchema = require('../validators/auth-validator');


router.route('/').get(authcontroller.home)
router.route('/register').post(validate(signupSchema),
        authcontroller.register)
router.route('/login').post(authcontroller.login)
module.exports=router;



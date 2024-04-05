const express=require('express');
const router=express.Router();
const authcontroller =require('../controllers/auth-contoller');
const validate=require("../middleware/validate-middleware");
const signupSchema = require('../validators/auth-validator');
const authMiddleware = require("../middleware/auth-middleware");


router.route('/').get(authcontroller.home)
router.route('/register').post(validate(signupSchema),
        authcontroller.register)

        // Login
router.route('/login').post(authcontroller.login)


router.route("/user").get(authMiddleware, authcontroller.user);


module.exports=router;



const { json } = require ("express");
const User =require('../models/user-model')
const bcrypt=require('bcryptjs');

const home = async (req, res) => {
        try {
           
//somthing

            res.send('Welcome to the home page!');
        } catch (error) {
            
            res.status(500).send('Internal Server Error');
        }
    };

//User login with JWT token and bcrypt hashing.....
    const register = async (req, res) => {
        try {
            const { username, email, phone, password } = req.body;
    
            const userExist = await User.findOne({ email });
    
            if (userExist) {
                return res.status(400).json({ msg: "Email already exists" });

            }
             const saltRound=10;
             const hash_passward=await bcrypt.hash(password, saltRound);
            const userCreated = await User.create({ username, email, phone, password :hash_passward,
              

            });
    
            res.status(200).json({ 
                msg: "User registered successfully", 
                token:await userCreated.generateToken(),
                userId: userCreated._id.toString(),
                user: userCreated });
        } catch (error) {
            // console.error("Error in user registration:", error);
            // res.status(500).json({ msg: "Internal Server Error" });
      next(error);
        }
    };


    //Login with Authentication

   
    const login = async (req, res) => {
        try {
            const {email, password } = req.body;
    
            const userExist = await User.findOne({ email });
            console.log(userExist);

            if (!userExist) {
                return res.status(400).json({ msg: "Invalid Credentials" });

            }
              const user=await bcrypt.compare(password, userExist.password);
            if(user){
                res.status(200).json({ 
                    msg: "User registered successfully", 
                    token:await userExist.generateToken(),
                    userId: userExist._id.toString(),
                });

            }else {
                res.status(401).json({ msg: "Invalid email or Password" });
            }
            
              
        } catch (error) {
            
            res.status(500).json({ msg: "Internal Server Error" });
        }
    };


    module.exports ={home,register,login};
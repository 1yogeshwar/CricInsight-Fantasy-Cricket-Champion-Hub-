// User Schema

const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
// const { number } = require('zod');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // assuming email should be unique
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
});

//JWT 

userSchema.methods.generateToken=async function () {
        try {
                return jwt.sign({
                        userId: this._id.toString(),
                        email:this.email,
                        isAdmin: this.isAdmin,
                },
                process.env.JWT_SECRET_KEY,{
                        expiresIn:"30d",
                }
                );
                
        } catch (error) {
            console.error(error)    
        }
}

const User = mongoose.model('User', userSchema);

module.exports = User;

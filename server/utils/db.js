require('dotenv').config();
const mongoose=require('mongoose');
const URI=process.env.MONGODB_URI;
//mongoose.connect("")

const connectDb= async ()=>{
        try {
             await mongoose.connect(URI);
             console.log("connection successful")  
        } catch (error) {
                console.log("connection unsuccessful")
                process.exit(0);       
        }
}

module.exports=connectDb;


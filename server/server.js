
const express = require('express')



const app = express()
app.use(express.json());


const router=require('./routers/auth-router')
const connectDb=require('./utils/db');
const errorMiddleware = require("./middleware/error-middleware");
const contactRoute = require("./routers/contact-router");


app.use("/api/auth", router);
app.use("/api/form", contactRoute);


app.use(errorMiddleware);

connectDb().then(()=>{
const port = 5001
app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
})
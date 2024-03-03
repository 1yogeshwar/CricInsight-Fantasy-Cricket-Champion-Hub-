
const express = require('express')

const cors = require("cors");

const app = express()
app.use(express.json());


const router=require('./routers/auth-router')
const connectDb=require('./utils/db');
const errorMiddleware = require("./middleware/error-middleware");
const contactRoute = require("./routers/contact-router");


const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/api/auth", router);
app.use("/api/form", contactRoute);


app.use(errorMiddleware);

connectDb().then(()=>{
const port = 5000
app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
})
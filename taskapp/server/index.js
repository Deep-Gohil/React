const express = require('express')
const cors = require('cors');
const connectToDatabase = require('./config/db');
const userRouter = require('./routes/user.router');
require("dotenv").config();

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/v1",userRouter);


const port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log("Listening On Port " +port);
    connectToDatabase();
})

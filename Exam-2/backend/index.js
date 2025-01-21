const express = require("express")
const connectToDatabase = require("./config/db")
const questionRouter = require("./routers/questionRouter")
require("dotenv").config()
const cors = require("cors")
const examRouter = require("./routers/examRouter")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/question",questionRouter);
app.use("/exam",examRouter)



const port = process.env.PORT || 8090
app.listen(port,()=>{
    console.log("server listening on port http://localhost:"+port);
    connectToDatabase();
    
})
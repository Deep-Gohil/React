const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./config/db");
const userRouter = require("./routes/userRouter");

const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/user",userRouter);

app.listen(8090, () => {
    console.log("Listening On " + 8090);
    connectToDatabase();
})
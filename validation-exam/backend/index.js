const express = require("express");
const productRoute = require("./routes/product.router");
const connectToDatabase = require("./config/db");
require("dotenv").config();
const app = express()
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())



app.use("/products", productRoute)


const port = process.env.PORT || 8090;
app.listen(port, () => {
    console.log("listening on port " + port);
    connectToDatabase();
})
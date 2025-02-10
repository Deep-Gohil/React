const mongoose = require('mongoose');

const connectToDatabase = async()=>{
    await mongoose.connect("mongodb://localhost:27017/db")
    console.log("Connected To database");
}

module.exports = connectToDatabase;
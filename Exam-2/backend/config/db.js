const mongoose = require('mongoose');

const connectToDatabase = async()=>{
    await mongoose.connect(process.env.DB_URL)
    console.log("Connected To Database");
}

module.exports = connectToDatabase;
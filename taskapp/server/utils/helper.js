const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

const hashPassword = async(password)=>{
    const hashedPassword = await bcrypt.hash(password,10);
    return hashedPassword;
}

const comparePassword = async(password, hashedPassword)=>{
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
}

const generateToken = async(data)=>{
    const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
}

module.exports ={hashPassword,comparePassword,generateToken}
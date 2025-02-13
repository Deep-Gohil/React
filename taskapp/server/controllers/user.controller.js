const User = require("../models/user.model");
const { hashPassword, generateToken, comparePassword } = require("../utils/helper");

const getAllUsers = async (req, res) => {
    let users = await User.find();
    res.status(200).send(users);
}

const createUser = async (req, res) => {
    let {username, email, password } = req.body;
    let isExists = await User.findOne({ email: email })
    if (isExists) {
        return res.status(400).send({ message: "User already exists!" })
    }

    const hashedPassword = await hashPassword(password);

    let newUser = await User.create({
        username,
        email,
        password: hashedPassword
    });

    const token = await generateToken({
        username: newUser.username,
        email:newUser.email,
        id: newUser._id
    });
    res.status(201).send({ message: "User created successfully!", newUser, token });
}

const login = async(req, res) => {
    let { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (!user) {
        return res.status(401).send({ message: "User Not Exists, Please Sign Up First"})
    }
    let isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
        return res.status(401).send({ message: "Invalid Password"})
    }

    const token = await generateToken({
        username: user.username,
        email:user.email,
        id: user._id
    });
    res.send({ message: "Login Successful!", user, token });
}

module.exports = {getAllUsers,createUser,login}
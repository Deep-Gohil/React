const {Router} = require("express");
const { getAllUsers, createUser, login } = require("../controllers/user.controller");

const userRouter = Router();

userRouter.get("/all",getAllUsers);
userRouter.post("/signup",createUser);
userRouter.post("/login",login);


module.exports = userRouter;
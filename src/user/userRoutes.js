const { Router } = require("express");
const { addUser, listUsers, deleteUser} = require("./userController");
const { hashPass} = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.get("/user", listUsers);
// userRouter.patch("/user", hashPass, updateUser);
userRouter.delete("/user", deleteUser);

module.exports = userRouter;
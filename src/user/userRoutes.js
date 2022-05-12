// require Router
const { Router } = require("express");
// require functions from userController
const { addUser, listUsers, updateUser, deleteUser, userLogin} = require("./userController");
// require hashPass to allow password encryption
const { hashPass, hashDecrypt } = require("../middleware");
// set router fucntion in variable 
const userRouter = Router();

// === routes ===

// route for adding user
userRouter.post("/user", hashPass, addUser);
// route for lsiting users
userRouter.get("/user", listUsers);
// route for updating user
userRouter.patch("/user", updateUser);
// route for deleting user
userRouter.delete("/user", deleteUser);

// route for user login
userRouter.get("/user/login", hashDecrypt, userLogin);

// export 
module.exports = userRouter;
// require Router
const { Router } = require("express");
// require functions from userController
const { addUser, listUsers, updateUser, deleteUser} = require("./userController");
// require hashPass to allow password encryption
const { hashPass} = require("../middleware");
// set router fucntion in variable 
const userRouter = Router();

// route for adding user
userRouter.post("/user", hashPass, addUser);
// route for lsiting users
userRouter.get("/user", listUsers);
// route for updating user
userRouter.patch("/user", updateUser);
// route for deleting user
userRouter.delete("/user", deleteUser);

// export 
module.exports = userRouter;
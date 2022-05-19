// require bcryptjs
const bcrypt = require("bcryptjs");
const User = require("../user/userModel");

// bcrypt hasPass encryption fucntion 
exports.hashPass = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message});
    }
};
exports.hashDecrypt = async (req, res, next) => {
    const user = await User.findOne({username: req.body.username});
    if (user == null){
        return res.status(400).send("Cannot find user");
    }  
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            loggedIn = user;
            next();
        } else {
            res.status(300).send("Incorrect Password");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message});
    };
};


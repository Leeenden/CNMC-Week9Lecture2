// require bcryptjs
const bcrypt = require("bcryptjs");
const User = require("../user/userModel");

// bcrypt hasPass encryption fucntion 
exports.hashPass = async (req, res, next) => {
    try {
        req.body.pass = await bcrypt.hash(req.body.pass, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message});
    }
};
exports.hashDecrypt = async (req, res, next) => {
    const user = await User.find({username: req.body.username, email: req.body.email, pass: req.body.pass});
    if (user == null){
        return res.status(400).send("Cannot find user");
    }  
    try {
        if (await bcrypt.compare(req.body.pass, user.pass)) {
            next();
        } else {
            res.status(300).send("Incorrect Password");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message});
    };
};


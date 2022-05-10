const User = require("./userModel");

// sign-up function
exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).send({ user: newUser.username });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.listUsers =  async (req, res) => {
  try {
      const users = await User.find({});
      res.status(200).send({ users })
  } catch (error) {
      console.log(error);
      res.status(500).send({ error: error.message })
  }
};

exports.deleteUser = async (req, res) => {
  //delete One movie from the db
  try {
      const deletedUser = await User.deleteOne({ username: req.body.username });
      res.status(200).send({ user: deletedUser })
  } catch (error) {
      console.log(error);
      res.status(500).send({ error: error.message })
  }
};
//login function

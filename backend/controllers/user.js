const User = require("../models/user");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.pass)
    return res
      .status(400)
      .send(
        "Process Failed: Incomplete data, Complete information and try again"
      );

  let existingUser = await User.findOne({ email: req.body.email });
  if (existingUser)
    return res
      .status(400)
      .send("Process failed: The Email user is already registered");

  let hash = await bcrypt.hash(req.body.pass, 10);

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    pass: hash,
    dbStatus: true,
  });
  let result = await user.save();
  if(!result) return res.status(400).send("Failed to register user*");

  try {
    let jwt = user.generateJWT();
    return res.status(200).send({ jwt })
    
} catch (e) {
    return res.status(400).send("Failed to register user")
}
};

const listUser = async (req, res) => {
  let user = await User.find({ name: new RegExp(req.params["name"], "i") })
    .populate()
    .exec();
  if (!user || user.length === 0)
    return res.status(400).send("There are not users");
  return res.status(200).send({ user });
};

module.exports = { registerUser, listUser };

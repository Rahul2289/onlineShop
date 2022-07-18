const bcrypt = require("bcrypt");
const joi = require("joi");
const User = require("../model/user.js");
const { genAuthToken } = require("../utils/genAuthToken.js");

//register
const register = async (req, res) => {
  const schema = joi.object({
    name: joi.string().min(3).max(20).required(),
    email: joi.string().min(3).max(100).required().email(),
    password: joi.string().min(3).max(200).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  }

  let user = await User.findOne({ email: req.body.email });

  if (user) {
    return res
      .status(400)
      .json({ msg: `user with email ${req.body.email} already exist` });
  }

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  user = await user.save();

  const token = genAuthToken(user);

  res.status(200).json({ token });
};

//login

const login = async (req, res) => {
  const schema = joi.object({
    email: joi.string().min(3).max(100).required().email(),
    password: joi.string().min(3).max(200).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  }

  let user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({
      msg: `${req.body.email} is not registered or invalid email`,
    });
  }

  const isValid = await bcrypt.compare(req.body.password, user.password);

  if (!isValid) {
    return res.status(400).json({
      msg: `invalid email/password `,
    });
  }

  const token = genAuthToken(user);

  res.status(200).json({ token });
};

module.exports = { register, login };

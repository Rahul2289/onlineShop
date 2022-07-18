const jwt = require("jsonwebtoken");

const genAuthToken = (user) => {
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRETE_KEY
  );

  return token;
};

module.exports = { genAuthToken };

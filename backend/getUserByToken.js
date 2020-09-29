const jwt = require('jsonwebtoken');
const User = require('./models/user.model');

module.exports = async (data) => {
  const verified = jwt.verify(data, process.env.TOKEN_SECRET);
  const userData = await User.findById(verified);
  return userData;
};

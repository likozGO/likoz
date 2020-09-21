const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const userSchema = new Scheme({
  username: {
    type: String, required: true, minlength: 6, maxlength: 255,
  },
  password: {
    type: String, required: true, minlength: 6, maxlength: 1024,
  },
  email: {
    type: String, required: true, minlength: 6, maxlength: 255,
  },
  isAdmin: {
    type: Boolean, default: false,
  },
},
{
  timestamps: true,
});
const User = mongoose.model('User', userSchema);

module.exports = User;

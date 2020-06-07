const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const userSchema = new Scheme({
  username: {
    type: String, required: true, unique: true, trim: true, minlength: 2,
  },
  password: {
    type: String, required: true, unique: false, minlength: 8,
  },
  email: {
    type: String, required: true, unique: true, trim: true, minlength: 3,
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

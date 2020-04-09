const mongoose = require('mongoose');

const Scheme = mongoose.Schema

const userSchema = new Scheme({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, //whitespace or smth.
        minlength: 3
    },
}, {
    timestamps: true,
})
const User = mongoose.model('User', userSchema);

module.exports = User;
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const {
  registerValidation, loginValidation, isAdminValidation, updateValidation,
} = require('../validation');
const verify = require('../verifyToken');

router.route('/').get(verify, async (req, res) => {
  const { error } = await isAdminValidation(req.headers['auth-token']);
  if (error) return res.status(400).send('You are not admin!');
  try {
    const userFind = await User.find();
    return res.json(userFind);
  } catch (e) {
    return res.status(400).send('Something went wrong');
  }
});

router.route('/:id').get(verify, async (req, res) => {
  const { error } = await isAdminValidation(req.headers['auth-token']);
  if (error) return res.status(400).send('You are not admin!');
  try {
    const userFind = await User.findById(req.params.id);
    return res.json(userFind);
  } catch (e) {
    return res.status(400).send('Something went wrong');
  }
});

router.route('/register').post(async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email already exist');
  const usernameExist = await User.findOne({ username: req.body.username });
  if (usernameExist) return res.status(400).send('Username already exist');

  const { username, password, email } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    password: hashedPassword,
    email,
  });

  try {
    const userFind = await newUser.save();
    console.log(userFind);
    return res.json('User added!');
  } catch (e) {
    return res.status(400).send('Something went wrong');
  }
});

router.route('/login').post(async (req, res) => {
  const { email, password } = req.body;
  const { error } = loginValidation(req.body);
  if (error) res.status(400).send(error.details[0].message);
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send('Email is not found');
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password');

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  const credentials = {
    token, user,
  };

  return res.header('auth-token', token).send(credentials);
});

router.route('/update/:id').post(verify, async (req, res) => {
  const { error } = await isAdminValidation(req.headers['auth-token']);
  if (error) return res.status(400).send('You are not admin!');
  try {
    const user = await User.findById(req.params.id);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    user.username = req.body.username;
    if (user.password !== req.body.password) {
      user.password = hashedPassword;
    }
    user.email = req.body.email;
    user.isAdmin = req.body.isAdmin;
    const msg = updateValidation(
      {
        username: user.username,
        password: user.password,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    );
    if (msg.error) return res.status(400).send(msg.error.details[0].message);
    await user.save();
    return res.json('User updated!');
  } catch (e) {
    return res.status(400).send(`Something went wrong: ${e}`);
  }
});

router.route('/:id').delete(verify, async (req, res) => {
  const { error } = await isAdminValidation(req.headers['auth-token']);
  if (error) return res.status(400).send('You are not admin!');

  try {
    await User.findByIdAndDelete(req.params.id);
    return res.json('User deleted!');
  } catch (e) {
    return res.status(400).send('Something went wrong');
  }
});

module.exports = router;

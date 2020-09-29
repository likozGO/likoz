const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const { registerValidation, loginValidation, isAdminValidation } = require('../validation');
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

router.route('/:id').get(verify, (req, res) => {
  User.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/register').post(async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) res.status(400).send(error.details[0].message);
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

  newUser.save()
    .then(() => res.json('User added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
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

  res.header('auth-token', token).send(credentials);
});

router.route('/update/:id').post(verify, (req, res) => {
  User.findById(req.params.id)
    .then((users) => {
      users.username = req.body.username;
      users.password = req.body.password;
      users.email = req.body.email;
      users.isAdmin = req.body.isAdmin;

      users.save()
        .then(() => res.json('User updated!'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete(verify, (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;

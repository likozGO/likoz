const router = require('express').Router();
const User = require('../models/user.model');
const { registerValidation } = require('../validation');

router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post(async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) res.status(400).send(error.details[0].message);
  const emailExist = await User.findOne({ email: req.body.email });
  const usernameExist = await User.findOne({ username: req.body.username });
  if (emailExist) return res.status(400).send('Email already exist');
  if (usernameExist) return res.status(400).send('Username already exist');

  const { username, password, email } = req.body;

  const newUser = new User({
    username,
    password,
    email,
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
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

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;

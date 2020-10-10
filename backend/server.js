const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const exjwt = require('express-jwt');

require('dotenv').config();

const jwtMW = exjwt({ secret: process.env.TOKEN_SECRET, algorithms: ['HS256'] });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const db = process.env.MONGODB_URL;

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true });
const { connection } = mongoose;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);

app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.get('/', jwtMW /* Using the express jwt MW here */, (req, res) => {
  res.send('You are authenticated'); // Sending some response when authenticated
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

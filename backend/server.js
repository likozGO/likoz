const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://admin:4128902@likoz-lyyzf.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const { connection } = mongoose;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

app.use('api/products', productsRouter);
app.use('api/users', usersRouter);

app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build'));
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

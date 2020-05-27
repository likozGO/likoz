const mongoose = require('mongoose');

const { Schema } = mongoose;


const productSchema = new Schema({
  username: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true },
},
{
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

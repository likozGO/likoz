const router = require('express').Router();
const Products = require('../models/product.model');

router.route('/').get((req, res) => {
  Products.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const { username } = req.body;
  const { title } = req.body;
  const { description } = req.body;
  const quantity = Number(req.body.quantity);
  const price = Number(req.body.price);
  const date = Date.parse(req.body.date);

  const newProduct = new Products({
    username,
    title,
    description,
    quantity,
    price,
    date,
  });

  newProduct.save()
    .then(() => res.json('New product added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Products.findById(req.params.id)
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
  Products.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
  Products.findById(req.params.id)
    .then((products) => {
      products.username = req.body.username;
      products.title = req.body.title;
      products.description = req.body.description;
      products.quantity = Number(req.body.quantity);
      products.price = Number(req.body.price);
      products.date = Date.parse(req.body.date);

      products.save()
        .then(() => res.json('Product updated!'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;

const router = require('express').Router();
let Products = require('../models/product.model');

router.route('/').get((req, res) => {
    Products.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req, res) => {
    const author = req.body.author;
    const title = req.body.title;
    const description = req.body.description;
    const quantity = Number(req.body.quantity);
    const price = Number(req.body.price);
    const date = Date.parse(req.body.date);


    const newUser = new Products({
        author,
        title,
        description,
        quantity,
        price,
        date
    });

    Products.save()
        .then(() => res.json('New product added!'))
        .catch(err => res.status(400).json(`Error: ${err}`))
})


module.exports = router;
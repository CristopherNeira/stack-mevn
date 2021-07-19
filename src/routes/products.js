const express = require('express');
const router = express.Router();

const Product = require('../models/Product');
router.get('/' , async (req, res) => {
    const products = await Product.find();
    res.json(products);
    //console.log(products);
});


router.post('/', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json({
        status: 'Product saved'
    });
});


router.put('/:id', async (req, res) => {

    console.log(req.params);
    await Product.findByIdAndUpdate(req.params.id, res.body);
    res.json({
        status: 'Product Updated'
    });
});

router.delete('/:id', async (req, res) => {

    console.log(req.params);
    await Product.findByIdAndRemove(req.params.id, res.body);
    res.json({
        status: 'Product Deleted'
    });
});

module.exports = router;
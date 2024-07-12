// // @route   GET api/items
// // @desc    Get All Items
// // @access  Public
// router.get('/', (req, res) => {
//     Item.find()
//         .sort({ date: -1 })
//         .then(items => res.json(items));
// });

// // @route   POST api/items
// // @desc    Create An Item
// // @access  Public
// router.post('/', (req, res) => {
//     const newItem = new Item({
//         name: req.body.name
//     });

//     newItem.save().then(item => res.json(item));
// });

// // @route   GET api/items/:id
// // @desc    Get A Specific Item
// // @access  Public
// router.get('/:id', (req, res) => {
//     Item.findById(req.params.id)
//         .then(item => res.json(item))
//         .catch(err => res.status(404).json({ success: false }));
// });

// // @route   PUT api/items/:id
// // @desc    Update An Item
// // @access  Public
// router.put('/:id', (req, res) => {
//     Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         .then(item => res.json(item))
//         .catch(err => res.status(404).json({ success: false }));
// });

// // @route   DELETE api/items/:id
// // @desc    Delete An Item
// // @access  Public
// router.delete('/:id', (req, res) => {
//     Item.findById(req.params.id)
//         .then(item => item.remove().then(() => res.json({ success: true })))
//         .catch(err => res.status(404).json({ success: false }));
// });

// module.exports = router;


const express = require('express');
const route =express.Router();

const products = require('../models/products'); 

// @route   GET api/items
// @desc    Get All Items
// @access  Public
route.get('/', (req, res) => {
    products.find()
        .sort({ date: -1 })
        .then(products => res.json(products));
});



route.post('/',(req,res)=>{
    const newProduct =new products({
        productId:req.body.productId,
        ProductName:req.body.ProductName,
        ProductPrice:req.body.ProductPrice,
        ProductImage:req.body.ProductImage,
    });

    newProduct.save().then(products=>res.json(products))
});


// @route   PUT api/products/:id
// @desc    Update An Item
// @access  Public
route.put('/:id', (req, res) => {
    products.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(item => res.json(products))
        .catch(err => res.status(404).json({ success: false }));
});

// @route   DELETE api/items/:id
// @desc    Delete An Item
// @access  Public
route.delete('/:id', (req, res) => {
    products.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = route; 
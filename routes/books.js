const express = require('express');
const router = express.Router();

// Item Model
const Book = require('../models/books'); // Ensure this path is correct

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    Book.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Book({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

// @route   GET api/items/:id
// @desc    Get A Specific Item
// @access  Public
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(404).json({ success: false }));
});

// @route   PUT api/items/:id
// @desc    Update An Item
// @access  Public
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(item => res.json(item))
        .catch(err => res.status(404).json({ success: false }));
});

// @route   DELETE api/items/:id
// @desc    Delete An Item
// @access  Public
router.delete('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;

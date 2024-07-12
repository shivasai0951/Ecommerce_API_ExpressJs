const express = require('express');
const route =express.Router();

const todolist = require('../models/todoList'); 

// @route   GET api/items
// @desc    Get All Items
// @access  Public
route.get('/', (req, res) => {
    todolist.find()
        .sort({ date: -1 })
        .then(todolist => res.json(todolist));
});



route.post('/',(req,res)=>{
    const newtodolist =new todolist({
        title:req.body.title,
        description:req.body.description,
        isActive:req.body.isActive
    });

    newtodolist.save().then(todolist=>res.json(todolist))
});


// @route   PUT api/products/:id
// @desc    Update An Item
// @access  Public
route.put('/:id', (req, res) => {
    todolist.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(item => res.json(todolist))
        .catch(err => res.status(404).json({ success: false }));
});

// @route   DELETE api/items/:id
// @desc    Delete An Item
// @access  Public
route.delete('/:id', (req, res) => {
    todolist.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = route; 
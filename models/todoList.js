const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const TodolistSchema=new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    isActive:{
        type: Boolean,
        required: false,
        default:true
    }
});

module.exports = products = mongoose.model('todolist', TodolistSchema);
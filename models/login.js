const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const loginSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true 
    },
    name:{
        type: String,
        required: true 
    },
    contact:{
        type: Number,
        required: true 
    },

});

module.exports = login = mongoose.model('login', loginSchema);

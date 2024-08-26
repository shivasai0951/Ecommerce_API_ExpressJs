const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const loginSchema = new Schema({
    email: {
        type: String,
        required: true,
    
    },
    password: {
        type: String,
        required: true
    },
    type:{ type: String, enum: ['USERS', 'ADMIN'], default: 'USERS' },
    Name:{
        type: String,
        required: true 
    },
    Contact:{
        type: Number,
        required: true 
    },

});

module.exports = login = mongoose.model('login', loginSchema);

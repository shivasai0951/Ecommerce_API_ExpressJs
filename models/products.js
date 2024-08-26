const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const productsSchema=new Schema({
    
    ProductName:{
        type: String,
        required: true
    },
    ProductDescription: { type: String, required: true },
    ProductStock: { type: Number, required: true },

    ProductPrice:{
        type: Number,
        required: true
    },
    ProductImage: {
        type: String,
        required: true
    },
    
});

module.exports = products = mongoose.model('products', productsSchema);
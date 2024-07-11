const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const productsSchema=new Schema({
    productId:{
        type: String,
        required: true
    },
    ProductName:{
        type: String,
        required: true
    },
    ProductPrice:{
        type: Number,
        required: true
    },
    ProductImage:{
        type: String,
        required: false
    }
});

module.exports = products = mongoose.model('products', productsSchema);
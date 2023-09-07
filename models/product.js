const mongoose = require('mongoose');

// The schema for the products collection
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    catagory: {
        type:[String],
        required: true
    }
})

const Product = mongoose.model('Product',productSchema);
module.exports = Product;

// That file will be removed, it was just to add initial data to database for sake of test
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODBURL)
.then(()=>{
    console.log("Connected to database")
}).catch(()=>{console.log('Failed to connected db')})


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

const Product = mongoose.model('Product',productSchema)


Product.insertMany([
    {
        name: 'product A', price: 100 , catagory: ['X','Y']
    },
    {
        name: 'product B', price: 140 , catagory: ['X']
    },
    {
        name: 'product C', price: 5 , catagory: ['Y','Z']
}]).then()
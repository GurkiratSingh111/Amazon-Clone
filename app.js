const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const Product = require('./models/product')


// Parsing the request bodies 
app.use(express.urlencoded({extended:true}));
// In order to parse JSON  files for body requests
app.use(express.json());



mongoose.connect(process.env.MONGODBURL)
.then(()=>{
    console.log("Connected to database")
}).catch(()=>{console.log('Failed to connected db')})

app.get('/', (req,res) => {
    res.send('Hello');
})




// Those codes will be moved later !

// get all products from database
app.get('/products', async (req,res)=>{
    const allProducts = await Product.find({})
    res.send(allProducts) 
})
// get a single product
app.get('/product/:product_id', async (req,res)=>{
    //TODO handling the non valid id request is needed
    const {product_id} = req.params;
    const item = await Product.findById(product_id);
    res.send(item)
})
//Add a new product 
app.post('/add/product', async (req,res)=>{
    const {name,price,catagory} = req.body;
    await Product.insertMany([{name,price,catagory}])
    res.send('Item is added to the database');
})

//Remove a product 


//Update a product





// For all other invalid url, sending a 404 status.
app.use('*',(req,res)=>{ res.status(404).send('Doesn\'t exist 404.')})

app.listen(process.env.PORT || 3000, () =>{
    console.log('Server is running');
})
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
import products from './data';

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
app.post('/addproducts',(req,res)=>{
    
})

// For all other invalid url, sending a 404 status.
app.use('*',(req,res)=>{ res.status(404).send('Doesn\'t exist 404.')})

app.listen(process.env.PORT || 3000, () =>{
    console.log('Server is running');
})
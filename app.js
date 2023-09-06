const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000 ;


mongoose.connect(process.env.MONGODBURL)
.then(()=>{
    console.log("Connected to database")
}).catch(()=>{console.log('Failed to connected db')})

app.get('/', (req,res) => {
    res.send('Hello');
})

app.listen(port, () =>{
    console.log('Server is running');
})
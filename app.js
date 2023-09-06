const express = require('express');
const app = express();

const port = process.env.PORT || 30000 ;

app.get('/', (req,res) => {
    res.send('Hello');
})

app.listen(port, () =>{
    console.log('Server is running');
})
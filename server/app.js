const express = require('express');
const app = express();

//for secure secret info
const dotenv = require('dotenv');
dotenv.config({path : './config.env'});

// connect database
require('./configs/db');

//acess json data
app.use(express.json())

//link the router files to make our route easy
app.use(require('./router/auth'))


const port = process.env.PORT;


app.listen(port, () => {
    console.log(`server is listen on ${port}`)
})
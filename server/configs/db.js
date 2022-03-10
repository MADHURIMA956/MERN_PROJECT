const mongoose = require("mongoose");

//for secure secret info
const db = process.env.DATABASE;

// connect database
mongoose.connect(db).then(() => {
        console.log('connection sucessful')
    }).catch((e)=> {
        console.log('no connection')
    }) 

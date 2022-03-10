const express = require('express');

const router = express();

const  User = require("../models/user.model");


router.post('/', async(req,res) => {
    //console.log(req.body)
    // res.json(req.body)
    const {name,email,phone,work,password,cpassword} = req.body;
    if(!name || !email ||!phone|| !work ||!password || !cpassword){
        return res.status(422).json({error : "plz filled the field properly"})
    };
    try{
        const userExit = await User.findOne({email : email});

        if(userExit)
            return res.status(422).json({error : "Email already exist"});
        else if(password !== cpassword)
            return res.status(422).json({error : "password is not matching"})
        else{
            const user = new User({name,email,phone,work,password,cpassword});
        
            await user.save();
             res.status(201).json({message : "User registered succesfully"});
        }
           

    }catch(e){
        res.status(500).json({error : "Failed to register"});
    }
})
module.exports = router;
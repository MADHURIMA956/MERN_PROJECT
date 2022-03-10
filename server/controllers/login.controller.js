const express = require('express');
const bcryptjs = require("bcryptjs");
const router = express();

const  User = require("../models/user.model");

router.post('/', async ( req,res) => {
    try{
        const {email , password} = req.body;

        if(!email || !password){
            return res.status(422).json({error : "plz filled the field properly"})
        }
        const userLogin = await User.findOne({email : email});

        if(userLogin){
            const isMatch = await bcryptjs.compare(password, userLogin.password);

            //get webtoken from user model
            let token = await userLogin.generateAuthToken();
            //  console.log(token);

            //store token in cookie
            res.cookie("jwtoken", token,{
                expires: new Date(Date.now() + 25892000000), //millisec
                httpOnly:true
            });

            if(!isMatch){
                res.status(400).json({error : "Invalid Credential"})
            }else{
                res.json({message : "user sign in sucessfully"});
            }
        }else{
            res.status(400).json({error : "Invalid Credential"})
        }

    }catch(e){
        console.log(e);
    }
})

module.exports = router;
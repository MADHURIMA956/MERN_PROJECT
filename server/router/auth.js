const express = require('express');

const router = express();
const userRegister = require("../controllers/register.controller");
const userLogin = require("../controllers/login.controller");

// middleware
const middleware = (req,res,next) => {
    console.log("hello from middleware")
}

router.get('/', (req,res) => {
    res.send("hello world  from auth")
})
router.get('/about', middleware, (req,res,next) => {
    res.send("hello from about");
    next();
})
router.get('/contact', (req,res) => {
    res.send("hello from contact")
})
router.get('/signin', (req,res) => {
    res.send("hello signin")
})
router.get('/signup', (req,res) => {
    res.send("hello signup")
})

router.use('/register',userRegister);
router.use('/login',userLogin);

module.exports = router;
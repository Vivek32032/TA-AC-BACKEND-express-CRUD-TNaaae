var express = require('express');
var router = express.Router();
var User = require("../model/user")

router.get('/',(req,res)=>{
    res.render('users')
});
router.get('/new',(req,res)=>{
    res.render('addNewUser');
})

router.post('/',(req,res,next)=>{

    User.create(req.body, (err,createdUser)=>{
        if(err) return res.redirect('/users/new')
        res.redirect('/');
    })
})

module.exports = router;

var express = require('express');
var router = express.Router();
var User = require("../model/user")

router.get('/',(req,res,next)=>{

    User.find({},(err,users) =>{
        console.log(err,users)
        if(err) return next(err);
    res.render('users', {users: users});
    });


})
router.get('/new',(req,res)=>{
    res.render('addNewUser');
})

router.post('/',(req,res,next)=>{

    User.create(req.body, (err,createdUser)=>{
        if(err) return res.redirect('/users/new')
        res.redirect('/');
    })
})

router.get('/:id',(req,res,next)=>{
    var id = req.params.id;
    User.findById(id,(err,user)=>{
        if(err) return next(err);
        res.render('singleUser',{user:user})
    })
})
router.get('/:id',(req,res)=> {

})

router.put('/:id',(req,res)=>{

})

router.delete('/:id',(req,res)=>{
    
})
module.exports = router;

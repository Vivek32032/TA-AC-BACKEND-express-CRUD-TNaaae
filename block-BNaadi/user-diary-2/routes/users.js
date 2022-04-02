var express = require('express');
var router = express.Router();
var User = require("../model/user")

router.get('/',(req,res,next)=>{

    User.find({},(err,users) =>{
        console.log(err,users)
        if(err) return next(err);
    res.render('listUsers', {users: users});
    });


})
router.get('/new',(req,res)=>{
    res.render('addNewUser');
})

router.post('/',(req,res,next)=>{

    User.create(req.body, (err,createdUser)=>{
        if(err) return res.redirect('/users/new')
        res.redirect('/users');
    })
})

router.get('/:id',(req,res,next)=>{
    var id = req.params.id;
    User.findById(id,(err,user)=>{
        if(err) return next(err);
        res.render('singleUser',{user:user})
    })
})
router.get('/:id/edit',(req,res,next)=> {
    var id= req.params.id;
    User.findById(id,(err,user)=>{
        if(err) return next(err);
        res.render('editUserDetails',{user:user})
    })
})


router.post('/:id',(req,res)=>{
    var id = req.params.id;
    User.findByIdAndUpdate(id,req.body,(err,updatedUser)=>{
        if(err) return next(err);
        res.redirect("/users/"+ id)
    })
})

router.get('/:id/delete',(req,res)=>{
    var id = req.params.id;
    User.findByIdAndDelete(id,(err,user)=>{
        if(err) return next(err);
        res.redirect('/users')
    })
})
module.exports = router;

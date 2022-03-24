var express=require('express');
var router=express.Router();




router.get('/new',(req,res)=>{

    res.render('userForm');
})
router.post('/',(req,res)=>{
    res.send(req.body);
})


router.get('/',(req,res)=>{
    res.render('index');
})


router.delete('/:id',(req,res)=>{
    let user = req.params.id;
    res.render('singleUser',{user:user});
})
router.get('/:id/edit',(req,res)=>{
    let user = req.params.id;
    res.render('singleUser',{user:user});
})

router.put('/:id',(req,res)=>{
    let user = req.params.id;
    res.render('singleUser',{user:user});
})


module.exports=router;
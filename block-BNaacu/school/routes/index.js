var express = require("express");
var router = express.Router();
// var ejs = require('ejs')

router.get("/", (req,res) => {
    res.render('index');
  });

router.get("/new", (req,res) => {
  res.send("studentForm");
});

router.post("/", (req,res) => {
  res.send(req.body);
});


module.exports = router;
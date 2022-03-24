var express = require("express");
var router = express.Router();

router.get("/new", (req,res) => {
  res.render("studentsForm");
});

router.post("/", (req,res) => {
  res.send(req.body);
});


router.get("/", (req,res) => {
  res.render('list', { list: ["Vivek", "Chandan", "Murari", "Pankaj"] });
});


router.get("/:id", (req,res) => {
    let id = req.param.id;
  res.render("studentDetail", {
    student: { name: "Deepak", email: "deepak@school.io" },
  });
});

module.exports =  router;
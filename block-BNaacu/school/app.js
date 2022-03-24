var express = require("express");
var path = require("path");
var view = require("ejs");
var studentsRouter=require('./routes/students');
var indexRouter=require('./routes/index');


var mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb://127.0.0.1:27017/admin", (err) => {
  console.log(err ? err : "connected to database");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//middlewares
app.use(express.json());


//routing middlewares
app.use('/',indexRouter);
app.use('/students',studentsRouter);

app.use((req,res,next)=>{
    res.send('Page Not Found')
})

app.listen(4466, () => {
  console.log("server is listening to port 4466");
});
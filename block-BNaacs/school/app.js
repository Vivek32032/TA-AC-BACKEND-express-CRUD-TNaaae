var express = require("express");
var path = require("path");
var mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/school",
{ useNewUrlParser : true , useUnifiedTopology: true },
(err)=> {
    console.log(err ? err : "connected true");
});

var app = express();

app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('index')
})

app.use((req,res,next)=>{
    res.send('Page Not Found');
})

app.listen(4455,()=>{
    console.log('server is listening on port 4455')
})
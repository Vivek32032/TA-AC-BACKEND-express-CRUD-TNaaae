var express = require("express");
var mongoose = require('mongoose');
var path = require('path');

var app = express();

mongoose.connect("mongodb://127.0.0.1:27017/user-diary",
{useNewUrlParser : true,useUnifiedTopology : true},
 (err)=> {console.log(err ? err : 'connected to database')})

app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'))

app.use((err,req,res)=>{
    res.send(err);
})

app.listen(4567,()=>{
    console.log('server listening on port 4567')
})
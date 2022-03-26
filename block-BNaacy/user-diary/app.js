var express = require('express');
var mongoose = require('mongoose');
var path = require('path')
var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

//connect to db
mongoose.connect('mongodb://localhost/userData',
{useNewUrlParser :true, useUnifiedTopology: true},
(err)=>{
    console.log("Connected", err? false :true)
})

//installing express app
var app = express();

app.set('view engine',"ejs");
app.set("views",path.join(__dirname,"views"));

//static middleware

app.use(express.static(path.join(__dirname,"public")))

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routing middleware

app.use('/',indexRouter);
app.use('/users',usersRouter)

app.use((req,res,next)=>{
    res.send('Page not Found');
})
app.use((err,req,res,next)=>{
    res.send(err);
})

//listeners

app.listen(3000,()=>{
    console.log('server is listening on port 3k');
})
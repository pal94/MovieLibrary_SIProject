const express = require('express');
const bodyparser = require('body-parser');

//PATH to database configurations
require("./config/db");

const app =express();

//MIDDLEWARE: bodyparser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/movies',require('./routes/movies'));

app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});

app.listen(3005,function(){

    console.log("now listneing for requests");
});
var express = require ('express');
var mysql = require ('mysql');
var app = express();

const customer = require('./routes/customer');






app.use('/api',customer);


app.listen(process.env.port || 4000, function(){

console.log('Now it listen');
});
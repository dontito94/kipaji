var express = require('express');  
var router = express.Router();
var Customer = require('../models/customer');
var app = express();
var mysql = require('mysql');

var connection =mysql.createConnection({
	//properties
	host:'localhost',
	user:'root',
	password:'9495',
	database:'kipaji'
});
connection.connect(function(error){
	if(!!error){
		 console.log('Error');
	}else{
		console.log('Connected');
	}
});


router.get('/customers',function(req,resp){
	connection.query("SELECT * FROM CUSTOMERS",function(error,rows,fields){
		if(!!error){
			console.log('error in query');
		}else{
			console.log('successful query');
			console.log(rows);
			resp.send(rows);
		}
	})
})

module.exports = router;

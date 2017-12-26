var express = require ('express');
var mysql = require ('mysql');
var app = express();

var connection =mysql.createConnection({
	//properties
	host:'localhost',
	user:'root',
	password:'9495',
	database:'kipaji'
})

connection.connect(function(error){
	if(!!error){
		 console.log('Error');
	}else{
		console.log('Connected');
	}
})

app.get('/customers',function(req,resp){
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
app.listen(1337);
var mysql = require ('mysql');
const Schema = mysql.Schema;

const CustomerSchema = new Schema({
	NAME:{
 	type:String,
 	required:[true,'username name field required'],
 	unique:true

 },
 AGE:{
 	type:integer,
 	unique: true,
 	required:[true,'email field required'],

 },

 ADDRESS:{
 	type:String,
 	required:[true,'firstname required']
 },
 SALARY:{
 	type:String,
 	required:[true,'lastname is required']
 },
 
});

const Customer = mysql.model('Customer',CustomerSchema);
module.exports = Customer;
  
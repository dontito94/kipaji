const express = require('express');
var mysql = require ('mysql');
 var Customer = {

 CustomerSchema : {
	NAME:{
 	type:String,
 	required:[true,'username name field required'],
 	unique:true

 },
 AGE:{
 	type:String,
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
 
}
};

module.exports = Customer;
  
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var User = require("./user-model.js");

mongoose.connect("mongodb://test:test@ds053156.mlab.com:53156/mongodb-test-valentino");

mongoose.connection.on("error", function(err){
	
	console.log(err);
});

var app = new express();

var obj;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/", function(req, res){
	
	var name = req.body.name;
	var surname = req.body.surname;
	var email = req.body.email;
	var age = Number(req.body.age);
	var gender = req.body.gender;
	
	obj = {
		"name": name,
		"surname": surname,
		"email": email,
		"age": age,
		"gender": gender
	};
	
	User.create(obj, function(err, result){
		
		if(err){
			console.log(err);
			return;
		}
		res.json("success");
		console.log(result);
	});
	
});

app.post("/get", function(req, res){
	
	var inputName=req.body.inputName;
	
	User.findOne({"name": inputName}, function(err, result){
		
		if(err){
			console.log(err);
			return;
		}
		
		res.json(result);
		console.log(result);
		
	});
	
});

app.listen(process.env.PORT||8000);
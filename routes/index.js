// Get all of our friend data
//var data = require('../data.json');
var databaseUrl = "mongodb://admin:admin@ds033069.mongolab.com:33069/heroku_app22105721";

var collections = ["tresfit", "arrgym"];
var db = require("mongojs").connect(databaseUrl, collections);

exports.view = function(req, res) {
	var nm = req.query.name;
	var data = {'alternate': false};
	if(nm != "") {
		db.tresfit.find({name:nm}).toArray(function(err, items) {
        	res.render('index', {'items': items, data: data});
    	});
	}
	else {		
		db.tresfit.find().toArray(function(err, items) {
        	res.render('index', {'items': items, data: data});
    	});
	} 
};

exports.viewAlternate = function(req, res) {
	var nm = req.query.name;
	var data = {'alternate': true};
	if(nm != "") {
		db.tresfit.find({name:nm}).toArray(function(err, items) {
        	res.render('index', {'items': items, data: data});
    	});
	}
	else {		
		db.tresfit.find().toArray(function(err, items) {
        	res.render('index', {'items': items, data: data});
    	});
	} 
};
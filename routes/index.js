// Get all of our friend data
var data = require('../data.json');
var databaseUrl = "mongodb://admin:admin@ds033069.mongolab.com:33069/heroku_app22105721";

var collections = ["tresfit", "arrgym"];
var db = require("mongojs").connect(databaseUrl, collections);

exports.view = function(req, res) {
	var nm = req.query.name;
	//if (typeof nm === 'undefined') {
		
	//} else if (nm === )

	//var cl = req.query.dropdown.value;
	//res.render('index', {'items': db.arrgym.find().toArray()});
	if(nm != "") {
		db.tresfit.find({name:nm}).toArray(function(err, items) {
        	res.render('index', {'items': items});
    	});
	}
	else {		
		db.tresfit.find().toArray(function(err, items) {
        	res.render('index', {'items': items});
    	});
	} 
};

$('#help').on('click', function() {
  ga('send', 'event', 'button', 'click');
});
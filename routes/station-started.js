var data = require("../data.json");

exports.markStationAsStarted = function(req, res) {  
	/*var newFriend = {
		"name": req.query.name,
			"description": req.query.description,
			"imageURL": "http://lorempixel.com/400/400/people"
	}
	data["friends"].push(newFriend);*/
	res.render('station-started', data);
 }
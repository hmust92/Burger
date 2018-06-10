var orm = require("../config/orm.js");

var burgers = {
	selectAll: function (callback) {
		orm.selectAll(function(response) {
			callback(response)
		})
	},
	insertOne: function (burger, callback){
		orm.insertOne(burger, function(response){
			callback(response)
		});
	},
	updateOne: function (id, callback) {
		orm.updateOne([id], function (response) {
			callback(response);
		})
	}
}

module.exports = burgers;
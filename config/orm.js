var connection = require("./connection.js")

var orm = {

	selectAll: function (callback) {
		connection.query("Select * from burgers", function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		})
	},

	insertOne: function (burger, callback) {
		connection.query("insert into burgers (burger_name) values (?)", [burger], function (err,  result) {
			if (err) {
				throw err;
			}
			callback(result);
		})
	},
	updateOne: function(id, callback) {
		connection.query("update burgers set devoured = true where id = ?", [id], function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		})
	}
}

module.exports = orm;
var express = require('express');

var router = express.Router();

var burgers = require("../model/burger.js");

router.get("/", function(request, response) {
	burgers.selectAll(function(data){
		var dataObject = {
			burgers: data
		}
		response.render("index", dataObject)
	})
})

router.post("/", function (request, response) {
    burgers.insertOne(request.body.burger_name, function () {
        response.redirect("/");
    });
});

router.put("/:id", function (request, response) {
    var id = request.params.id;

    burgers.updateOne(id, function () {
        response.redirect("/");
    });
});

module.exports = router;




// Require Express and Import burger object from burger.js
var express = require("express");
var burger = require("../models/burger.js");

//Set up router
var router = express.Router();

// Set up Route to GET data from database and render index handlebars file
router.get("/", function(req, res) {
    burger.selectAll(function(burger_data){
        console.log(burger_data);
        res.render("index", {burger_data});
    }); 
});

// Set up Route to UPDATE selected data id's to "true" in the database
router.put("/burgers/updateOne", function(req, res){
    burger.updateOne(req.body.burger_id, function(result){
        console.log(result);
        res.redirect("/");
    });
});

// Set up Route to INSERT new data by user into database 
router.post("/burgers/insertOne", function(req, res){
    burger.insertOne(req.body.burger_name, function(result){        
        res.redirect("/");
    });
});

// Export routes to server.js
module.exports = router;
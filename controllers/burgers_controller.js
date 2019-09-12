// Require Express
var express = require("express");

//Set up router
var router = express.Router();

// Set up Route to reference index
router.get("/", function(req, res) {
    res.render("index");
});

module.exports = router;
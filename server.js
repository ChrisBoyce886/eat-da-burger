// NPM Packages 
var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Create Express Server
var app = express();
app.use(express.static(__dirname + "/public"));

// Set port 
var PORT = process.env.PORT || 3000;

// Insert code for handlebars
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Insert code from Body-Parser npm page 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text({ type: "text/html" }));
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));

// Insert code from method-override npm page
app.use(methodOverride("_method"));

// Require burgers_controller.js file
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// Listen to Port being used, confirm working server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
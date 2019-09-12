// Require MySQL connection data
var connection = require("./connection.js");

// ORM object
var orm = {
    // Create SQL query to SELECT all data within our database
    selectAll: function(tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(error, result) {
            if (error) {
                throw error;
            }
                callback(result);
        })
    },
    // Create SQL query to UPDATE selected data to "true" within our database
    updateOne: function(tableInput, condition, callback){
        var queryString2 = "UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";"
        connection.query(queryString2, function(error, result) {
            if(error) {
                throw error;
            }
                callback(result);
        })
    },
    // Create SQL query to INSERT new data into our databases
    insertOne: function(tableInput, value, callback){
        var queryString3 = ('INSERT INTO ' + tableInput + " (burger_name) VALUES ('" + value + "');")
        connection.query(queryString3, function(error, result){
            if (error){
                throw error
            }
                callback(result);
        })
    }
};

// Export ORM object
module.exports = orm;
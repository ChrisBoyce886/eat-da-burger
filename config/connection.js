// Require MySQL & dotenv for password
var mysql = require("mysql");
require("dotenv").config();

// MySQL Credentials for Heroku's JawsDB & for local database
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.PASSCODE,
        database: "burgers_db"
    });
};

// Log any connection errors or log successful connection
connection.connect(function(error){
    if (error) {
        console.error("ERROR! MySQL Connection error: " + err.stack);
        return;
      }
    console.log("=====================================");
    console.log("You are connected to MySQL as ID: " + connection.threadId);
    console.log("=====================================" + "\n");
});

// Export connection
module.exports = connection;
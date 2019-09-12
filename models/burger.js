// Require ORM to interact with the database
var orm = require("../config/orm.js");

// Variable object to hold MySQL SELECT, UPDATE, and INSERT INTO functions
var burger = {
    selectAll: function(callback){
        orm.selectAll("burgers", function(res){
            callback(res);
        })
    },

    updateOne: function(id, callback){
        orm.updateOne("burgers", id, callback);
    },

    insertOne: function(name, callback){
        orm.insertOne("burgers", name, callback);
    }
};

// Export database functions for controller
module.exports = burger;
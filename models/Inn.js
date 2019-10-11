var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var innSchema = new Schema({
  adj: {
    type: Array,
    unique: true,
  },
  noun: {
    type: Array,
    unique: true,
  },
  type: {
    type: Array,
    unique: true,
  },
});

// Creates model
var Inn = mongoose.model("Inn", innSchema);

module.exports = Inn;
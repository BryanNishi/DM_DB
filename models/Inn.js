const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Create new Schema
var innSchema = new Schema({
  adj: {
    type: Array,
    unique: true,
    required: true
  },
  noun: {
    type: Array,
    unique: true,
    required: true
  },
  type: {
    type: Array,
    unique: true,
    required: true
  },
});

// Creates model
var Inn = mongoose.model("Inn", innSchema);

module.exports = Inn;
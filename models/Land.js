var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var landSchema = new Schema({
  adj: {
    type: Array,
    unique: true,
  },
  noun: {
    type: Array,
    unique: true,
  },
});

// Creates model
var Land = mongoose.model("Land", landSchema);

module.exports = Land;
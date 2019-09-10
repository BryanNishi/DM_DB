var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var minorSchema = new Schema({
  minorItem: [String]
});

// Creates model
var MinorItem = mongoose.model("Minor", minorSchema);

module.exports = MinorItem;
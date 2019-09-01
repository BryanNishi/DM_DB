var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var failSchema = new Schema({
  fail: [String]
});

// Creates model
var Fail = mongoose.model("Fail", failSchema);

module.exports = Fail;
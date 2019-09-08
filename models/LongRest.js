var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var longRestSchema = new Schema({
  longRest: [String],
 });

// Creates model
var LongRest = mongoose.model("LongRest", longRestSchema);

module.exports = LongRest;
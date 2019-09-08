var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var encounterSchema = new Schema({
  encounter: [String],
 });

// Creates model
var Encounter = mongoose.model("Encounter", encounterSchema);

module.exports = Encounter;
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var chestSchema = new Schema({
  style: [String],
  material: [String],
  trim: [String],
  decor: [String],
  trap: [String],
  lock: [String],
  key: [String],
});

// Creates model
var Chest = mongoose.model("Chest", chestSchema);

module.exports = Chest;
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var trapSchema = new Schema({
  traps: [String],
  tripped: [String],
  hazard: [String],
  disarm: [String],
});

// Creates model
var Trap = mongoose.model("Trap", trapSchema);

module.exports = Trap;
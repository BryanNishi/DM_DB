var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var chestSchema = new Schema({
  style: {
    type: Array,
    unique: true,
  },
  material: {
    type: String,
    unique: true,
  },
  trim: {
    type: String,
    unique: true,
  },
  decor: {
    type: String,
    unique: true,
  },
  trap: {
    type: String,
    unique: true,
  },
  lock: {
    type: String,
    unique: true,
  },
  key: {
    type: String,
    unique: true,
  },
});

// Creates model
var Chest = mongoose.model("Chest", chestSchema);

module.exports = Chest;
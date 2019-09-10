var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var magicItemSchema = new Schema({
  minor: {
    type: Array, "default": [
      { name: String },
      { rarity: String },
      { notes: String },
      { source: String }
    ]
  },
  armor: {
    type: Array, "default": [
      { name: String },
      { rarity: String },
      { notes: String },
      { source: String }
    ]
  },
  potion: {
    type: Array, "default": [
      { name: String },
      { rarity: String },
      { notes: String },
      { source: String }
    ]
  },
  ring: {
    type: Array, "default": [
      { name: String },
      { rarity: String },
      { notes: String },
      { source: String }
    ]
  },
  rod: {
    type: Array, "default": [
      { name: String },
      { rarity: String },
      { notes: String },
      { source: String }
    ]
  },
  scroll: {
    type: Array, "default": [
      { name: String },
      { rarity: String },
      { notes: String },
      { source: String }
    ]
  },
  staff: {
    type: Array, "default": [
      { name: String },
      { rarity: String },
      { notes: String },
      { source: String }
    ]
  },
  weapon: {
    type: Array, "default": [
      { name: String },
      { rarity: String },
      { notes: String },
      { source: String }
    ]
  },
});

// Creates model
var MagicItem = mongoose.model("Magic Item", magicItemSchema);

module.exports = MagicItem;
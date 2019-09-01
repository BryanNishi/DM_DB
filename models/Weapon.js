var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var weaponSchema = new Schema({
  name: [String]
});

// Creates model
var Weapon = mongoose.model("Weapon", weaponSchema);

module.exports = Weapon;
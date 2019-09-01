var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var citySchema = new Schema({
  name: [String]
});

// Creates model
var City = mongoose.model("City", citySchema);

module.exports = City;
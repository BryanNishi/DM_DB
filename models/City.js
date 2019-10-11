var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create new Schema
var citySchema = new Schema({
  city: {
    type: Array,
    required: true,
    unique: true,
  },
});

// Creates model
var City = mongoose.model("City", citySchema);

module.exports = City;
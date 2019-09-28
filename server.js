const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');

app.use(cors());
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
app.use("/auth",routes);

// Connect to the Mongo DB
// If deployed, use the deployed database. Otherwise use the local DMDB database
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/DMDB";
// var MONGODB_URI = "mongodb://localhost:27017/DMDB" || "mongodb://localhost/DMDB";
var MONGODB_URI = "mongodb+srv://dmdb:dmdbpass@dmdbcluster0-ctm2j.mongodb.net/DMDB?retryWrites=true&w=majority" || "mongodb://localhost/DMDB";

mongoose.connect(MONGODB_URI);


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("Connected to Mongo DB via " + MONGODB_URI)
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
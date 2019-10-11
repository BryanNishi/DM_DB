const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');

require('dotenv').config()

app.use(cors());
app.use(compression()); //Compress all routes
app.use(helmet()); //Header security
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use('/', express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);
app.use("/auth",routes);

// Connect to the Mongo DB
var MONGODB_URI = process.env.DB_URI;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("MongoDB database connection established successfully");
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
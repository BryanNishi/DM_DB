const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");

require("dotenv").config();

app.use(cors());
app.use(compression()); //Compress all routes
app.use(helmet()); //Header security
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));
}

// Add routes
app.use(routes);

// Connect to the Mongo DB
var MONGODB_URI = process.env.DB_URI;
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true })
  .then(result => {
    console.log('Connected to Mongo DB');
    // Start the API server
    app.listen(PORT, function() {
      console.log(`API Server now listening on PORT ${PORT}`);
    });
  })
  .catch(err => {
    console.log(err);
  });

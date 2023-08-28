// ---------------------------------------------------
// SERVER INITIALIZATION AND CONFIGURATION SETUP
// ---------------------------------------------------

// 1) Imports of 3rd-party Libraries
const express = require("express");
const cors = require("cors");

// 2) Intiliazing Express instance ('app') and define auxiliar variables
const app = express();
const port = 8080;

// 3) Initializing connection to NoSQL database (MongoDB) using Moongose interface
require("./config/mongoose.config");

// 4) Configuring cors in Express instace ('app')
app.use(cors());

// 5) Enabling settings for being able to read JSON and parse url encoded data in requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 6) Importing API routes passing the Express instance 'app'
const VetClientList = require("./routes/vetClientList.route");
VetClientList(app);

// 7) Running instance of Express server in selected port
app.listen(port, () => console.log(`Listening on port: ${port}`));
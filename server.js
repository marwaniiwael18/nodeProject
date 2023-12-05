
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require('./db')

const productRoutes = require("./app");
const server = express();

connectDB();

// middleware defitions
// parse requests of content-type - application/json
server.use("/api", productRoutes); //CRUD routes



const PORT = 5001;
server.listen(PORT, function () {
  console.log("Server is running on port:  " + PORT);
});

module.exports = server;
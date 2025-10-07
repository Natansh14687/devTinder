const express = require("express");

const app = express();

const { connectDB } = require("./config/database");

// The right way of connecting to database means database will be connected first and then server will be started if database is not connected it will give error


connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(7777, () => {
      console.log("Server is successfully listening to port 7777");
    });
  })
  .catch((err) => {
    console.log("Database can't be connected");
  });

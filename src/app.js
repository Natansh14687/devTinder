const express = require("express");

const app = express();

const {connectDB} = require("./config/database")

connectDB();


app.listen(7777, () => {
  console.log("Server is successfully listening to port 7777");
});

const express = require("express");

const app = express();

const { connectDB } = require("./config/database");
const User = require("./models/users");

app.post("/signup", async (req, res)=>{

    const user = new User({
        firstName: "Natansh",
        lastName: "Khurana",
        emailId: "natansh@gmail.com",
        password: "hello@123",
        age: 22,
        gender: "male",
    })

    try{
        await user.save();
        res.send("User added successfully");
    }catch(err){
        res.status(400).send("error ocurred in connecting database" + err.message);
    }
})

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

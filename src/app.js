const express = require("express");

const app = express();

const { connectDB } = require("./config/database");
const User = require("./models/users");
app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("error ocurred in connecting database" + err.message);
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length == 0) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    const user = await User.findByIdAndDelete({ _id: userId });
    res.send("User deleted successfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

// Update data of the user

// app.patch("/user/:userId", async (req, res) => {
//   const userId = req.params?.userId;
//   const data = req.body;

//   try {
//     const allowed_updates = ["firstName", "lastName", "age", "about", "photoURL", "gender"];
//     const isUpdateAllowed = Object.keys(data).every(k => allowed_updates.includes(k));
//     if(!isUpdateAllowed){
//         throw new Error("Updating some fields not allowed");
//     }
//     const user = await User.findByIdAndUpdate(userId, data, {
//       returnDocument: "after",
//       runValidators: true,
//     });
//     console.log(user);
//     res.send("user updated successfully");
//   } catch (err) {
//     res.status(400).send("Something went wrong " + err.message);
//   }
// });

app.patch("/user", async (req, res) => {
    const {emailId , ...data} = req.body;

    try{
        const canUpdate = ["firstName", "lastName", "age", "about", "photoURL", "gender","emailId"];
        const isAllowUpdate = Object.keys(data).every(k => canUpdate.includes(k));
        if(!isAllowUpdate){
            throw new Error("Can't update some fields.");
        }
        const user = await User.findOneAndUpdate({emailId : emailId},data,{
            returnDocument:"after",
        })
        console.log(user);
        res.send("Updated Successfully");
    }catch(err){
        res.status(400).send("Something went wrong " + err.message);
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

const express = require("express");

const app = express();
const {adminAuth, userAuth} = require("./middlewares/auth")

app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
    console.log("Getting All data, admin route");
    res.send("Get all data");
})

app.use("/user", userAuth);

app.get("/user/deleteUserData", (req, res)=>{
    console.log("Deleting DataTransfer, user route");
    res.send("Delete data");
})






app.listen(7777, () => {
  console.log("Server is successfully listening to port 7777");
});

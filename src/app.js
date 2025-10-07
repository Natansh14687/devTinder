const express = require("express");

const app = express();



// app.get("/user",(req, res, next)=>{
//     console.log("handling route user 1 !!");
//     res.send("response 1");
//     next();
// }, (req, res) => {
//     console.log("Handling route user 2 !!");
//     res.send("response 2"); 
// }, (req, res) => {
//     console.log("Handling route user 3 !!");
//     res.send("response 3");
// })

app.get("/user",(req, res, next)=>{
    console.log("handling route user 1 !!");
    res.send("response 1");
    next();
}, (req, res, next) => {
    console.log("Handling route user 2 !!");
    // res.send("response 2");
    next();
}, (req, res) => {
    console.log("Handling route user 3 !!");
    // res.send("response 3");
})

app.listen(7777, () => {
  console.log("Server is successfully listening to port 7777");
});

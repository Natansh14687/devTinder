const express = require("express");

const app = express();

app.use("/hii",(req,res)=>{
    res.end("Hello, World!!");
})

app.use("/test", (req, res)=>{
    res.send("This is the testing route");
})

app.use("/",(req, res)=>{
    res.end("This is the dashboard page");
})

app.listen(7777, ()=>{
    console.log("Server is successfully listening to port 7777");
    
});
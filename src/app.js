const express = require("express");

const app = express();



app.use("/user",(req, res, next)=>{
    console.log("Reponse from user 1");
    res.send("user 1 !!");
    next();
})

app.use("/user", (req, res)=>{
    console.log("Response from user 2");
    // res.send("user 2 !!");
    
})

// Authorization for every route in admin root route is very clumsy, see

app.get("/admin/getAllData", (req, res)=>{
    console.log("Get all data");
    const token = "xyz";
    const isAdminAuthorized = token === "xy";
    if(isAdminAuthorized){
        res.send("get All Data");
    }else{
        res.status(401).send("Unauthorized Request");
    }
    
});

app.get("/admin/deleteAllData", (req, res)=>{
    console.log("Delete all data");
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if(isAdminAuthorized){
        res.send("Delete all data");
    }else{
        res.status(401).send("Unauthorized Request");
    }
})

app.listen(7777, () => {
  console.log("Server is successfully listening to port 7777");
});

const express = require("express");

const app = express();

// app.use("/user", (req, res)=>{
//     res.send("HAHAHAHAHAHAHHAHAHAHA");
// });

app.get("/user", (req, res) => {
    res.send({firstName: "Natansh", lastName:"Khurana"});
})

app.post("/user",(req, res) => {
    res.send("Posting data to database");
})

app.delete("/user", (req, res) => {
    res.send("Deleting data...");
})

app.patch("/user", (req, res)=>{
    res.send("updating fields in document in database");
})

app.put("/user", (req, res)=>{
    res.send("Updating database");
})

app.use("/test", (req, res)=>{
    res.send("This is the testing route");
})



app.listen(7777, ()=>{
    console.log("Server is successfully listening to port 7777");
    
});
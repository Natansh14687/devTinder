const express = require("express");

const app = express();

// app.use("/user", (req, res)=>{
//     res.send("HAHAHAHAHAHAHHAHAHAHA");
// });

app.get("/abc", (req, res) => {
  console.log(req.query);
  res.send({ firstName: "Natansh", lastName: "Khurana" });
});

app.get("/user/:userId/:name/:password", (req, res)=>{
    console.log(req.params);
    
    res.send("getting dynamic routes");
})

app.listen(7777, () => {
  console.log("Server is successfully listening to port 7777");
});

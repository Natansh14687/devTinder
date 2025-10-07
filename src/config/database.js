const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://natansh522:aziPBkEyJCZJugP5@namastenode.r1xep4y.mongodb.net/");
};

connectDB()
    .then(()=>{
        console.log("Database connection established");
    }).catch((err)=>{
        console.log("Database can't be connected");
    })

module.exports = {connectDB};
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required : true,
    },
    lastName: {
        type: String,
    },
    emailId: {
        type: String,
        required : true,
        unique : true,
    },
    password: {
        type: String,
        required : true,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
        validate(value){
            if(!["male", "female","others"].includes(value)){
                throw new Error("Gender data is not valid");
            }
        }
    }, 
    photoURL : {
        type : String,
        default : "https://www.istockphoto.com/photos/user-profile",
    },
    about : {
        type : String,
        default : "This is default about for the user",
    }
},{ timestamps: true });

module.exports = mongoose.model("User", userSchema);
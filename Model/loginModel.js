// Required Files
const mongoose = require("mongoose");

// Creating Schema
const User = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required: true
    },
    type : {
        type : String,
        default : "User"
    }
})

// Creating Model
const Users = mongoose.model("user" , User)

// Exports
module.exports = Users
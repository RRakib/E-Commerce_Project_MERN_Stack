// Imports
const mongoose = require("mongoose")

// Product Schema
Product = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    details : {
        type : String,
        required : true
    },
    productImage : {
        type : String,
        required: true
    },
    timestamp : {
        type : Date,
        default : Date.now
    }
})

// Product Model
Products = mongoose.model("product" , Product)

// Exports
module.exports = Products
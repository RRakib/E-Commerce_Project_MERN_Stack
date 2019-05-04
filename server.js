// Required Files
const express = require("express");
const key = require("./config/key");
const mongoose = require("mongoose");
const UserController = require("./controller/userController")
const ProductController = require("./controller/productController")

const app = express();

// Applying Middleware
app.use("/uploads" , express.static("uploads"))
app.use(express.urlencoded({extended : false}));
app.use(express.json())

// Assign Route
app.use("/user" , UserController)
app.use("/products" , ProductController)

// MongoDB connect
mongoose.connect(key.mongoURI , {useNewUrlParser : true})
        .then(res => console.log("Connected To MongoDB"))
        .catch(err => console.log("ERROR!! " + err))

// Port
const port = process.env.PORT || 5000

// Listen To Port
app.listen(port , () => {
    console.log("Listening to port 5000")
})
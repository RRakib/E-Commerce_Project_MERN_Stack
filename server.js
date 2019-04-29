const express = require("express");
const mongoose = require("mongoose");
const key = require("./config/key")

const app = express();

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
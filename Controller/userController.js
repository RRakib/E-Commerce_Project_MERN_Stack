// Required Files
const express = require("express");
const route = express.Router();
const Users = require("../Model/loginModel")

// Register User
route.post("/register" , (req , res) => {
    Users(req.body).save()
                   .then(resData => {
                        res.json(resData)
                   })
                   .catch(err => {
                       res.json({error : err})
                   })
})

// Exports
module.exports = route;
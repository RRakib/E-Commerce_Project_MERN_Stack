// Required Files
const express = require("express");
const route = express.Router();
const Users = require("../model/loginModel")

// Register User
route.post("/register" , (req , res) => {
    Users.findOne({email : req.body.email})
         .then(resData => {
            if(resData){
                res.json({error : "User Already Exists"})
            }
            else{
                Users(req.body).save()
                .then(resData => {
                    res.json({success : "Registration Success"})
                })
                .catch(err => {
                    res.json({error : err})
                })
            }
         })
         .catch(err => {
            res.json({error : err})
         })
})

// Login User
route.post("/login" , (req , res) => {
    Users.findOne({email : req.body.email})
         .then(resData => {
            if(!resData){
                res.json({error : "You are not registered"})
            }
            else{
                if(req.body.password === resData.password){
                    res.json({type : resData.type})
                }
                else{
                    res.json({error : "Wrong Password"})
                }
            }
         })
         .catch(err => {
            res.json({error : err})
         })
})

// Exports
module.exports = route;
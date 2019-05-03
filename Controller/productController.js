// Imports
const express = require("express")
const Products = require("../Model/productModel")
const route = express.Router()

// Method : Post /products/add
route.post("/add" , (req, res) => {
    Products(req.body).save()
                      .then(resData => res.json(resData))
                      .catch(err => res.json(err))
})

// Exports
module.exports = route
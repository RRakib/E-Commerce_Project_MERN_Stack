// Imports
const multer = require("multer")
const express = require("express")
const Products = require("../Model/productModel")
const route = express.Router()

// Multer Setup
const storage = multer.diskStorage({
    destination : (req, file , cb) => {
        cb(null , "./uploads")
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({storage : storage})

// Method : POST /products/add
route.post("/add" , upload.single("productImage") , (req, res) => {
    console.log(req.file);
    Products({
        name: req.body.name,
        price: req.body.price,
        productImage : req.file.path
    }).save()
      .then(resData => res.json(resData))
      .catch(err => res.json(err))
})

// Method : GET /products/add
route.get("/add" , (req, res) => {
    Products.find()
            .then(resData => res.json(resData))
            .catch(err => res.json({error : err}))
})

// Exports
module.exports = route
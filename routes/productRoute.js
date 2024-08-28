const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()
const productSchema = require('../schemas/productSchema')

const Product = new mongoose.model("Product", productSchema)

router.get("/", async (req, res) => {
    try {
        const result = await Product.find()
        res.send(result)
    }
    catch (error) {
        console.log(error);
    }
})

router.post("/", async (req, res) => {
    try {
        const newProduct = new Product(req.body)
        const result = await newProduct.save()
        res.send(result)
    }
    catch (error) {
        console.log(error);
        res.send({ message: error?.message })
    }
})

module.exports = router
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    productId: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    memory: {
        type: String,
        require: true
    },
    weight: {
        type: String,
        require: true
    },
    display: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    processor: {
        type: String,
        require: true
    },
    photo: {
        type: String,
        require: true
    }

})
module.exports = productSchema
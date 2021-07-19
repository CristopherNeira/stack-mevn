const mongoose = require('mongoose'); 

const { Schema } =  mongoose;

const Product = new Schema({
    name: String,
    code: String,
    stock: Number
});


module.exports = mongoose.model('Product', Product);
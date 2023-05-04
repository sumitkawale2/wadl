const mongoose = require("mongoose")

const Product = new mongoose.Schema({
    name:String,
    price:Number
})

const ProductModel = mongoose.model("product", Product);

module.exports = ProductModel;















/* {
    timestamps:true, versionKey:false
} */

/* details:{company, weight} */
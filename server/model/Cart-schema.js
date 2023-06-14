const mongoose = require('mongoose')
const CartSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true,
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String
})
const Cart = new mongoose.model("Cart" , CartSchema)
module.exports = Cart
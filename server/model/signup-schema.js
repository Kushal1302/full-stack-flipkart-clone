const mongoose = require('mongoose')
const signupSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    username:String,
    email:String,
    password:String,
    phone:String
})
const User = new mongoose.model("User" , signupSchema)
module.exports = User
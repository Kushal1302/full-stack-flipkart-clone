const express = require('express')
const router = express.Router()
const User = require('../model/signup-schema.js')
const Product = require('../model/product-schema.js')

router.post('/signup' , async (req , res) => {
    try {
      const  {firstname , lastname , username , email , password , phone} = req.body;
      if(!firstname || !lastname || !username || !email || !password || !phone){
        return res.send({message:"Please Fill Complete form"})
      }else{
            const checkData = await User.findOne({email:email})  
            if(checkData != null){
                return res.send({message:"Email Already exists"})
            }else{
                const data = await User(req.body)
                await data.save()
                return res.send({message:"Registration Successfull"})
            }
    }
 } catch (error) {
        console.log("Error While Posting Data")
    }
})
router.post('/login' , async(req , res) => {
    try {
        const {username , password} = req.body
        if(!username || !password){
            return res.send({message:"Please Fill Complete Form"})
        }else{
            const checkData = await User.findOne({username , password})
            // console.log(checkData)
            if(!checkData){
                return res.send({message:"Invalid Credentials"})
            }else{
                res.send({message:"Login Successfull" , user:checkData})
            }
        }
    } catch (error) {
        console.log("Error while Login User")
    }
})
router.get('/product' , async(req, res) => {
    try {
        const data = await Product.find({})
        return res.send(data)
    } catch (error) {
        return res.send({error:error.message})
    }
})

router.get('/product/:id' , async (req , res) => {
    try {
        const id = req.params.id
        const resData = await Product.findOne({'id':id})
        console.log(resData)
        return res.send(resData)
    } catch (error) {
        return res.send({message:"Failure"})
    }
})
module.exports = router
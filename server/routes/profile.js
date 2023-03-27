const express = require('express');
const router = express.Router()
const middleware=require('./middleware')
const ProfileModel=require('../models/profileSchema')
router.post('/',middleware,async(req,res)=>{
    try {
        console.log("req.user",req.user)
        console.log(req.body)
        const {name,Image,DOB,skills,gender,experience,linkedIn}=req.body
        console.log("name,Image,DOB,skills,gender,experience,linkedIn",name,Image,DOB,skills,gender,experience,linkedIn);
        const Profile=await ProfileModel.create({
            ...req.body,
            userref: req.user.id
        })
        console.log(Profile)
        res.json({
            Profile
        })
    } catch (error) {
        res.send(error)
        console.log(error.message)
    }
})
router.get('/',middleware,async(req,res)=>{
    try {
        console.log("req.user",req.user)
        const id=req.user.id
        const Profile=await ProfileModel.findOne({userref:id})
        res.json({
            status:"success",
            Profile
        })
    } catch (error) {
        res.send(error)
        console.log(error.message)
    }
})
router.put('/',middleware,async(req,res)=>{
    try {
        console.log("req.body",req.body)
        const id=req.user.id      
        const Profile=await ProfileModel.findOneAndUpdate({userref:id},{...req.body},{new:true})
        console.log(Profile)
        res.json({
            status:"success",
             Profile
        })
    } catch (error) {
        res.send(error)
        console.log(error.message)
    }
})
module.exports=router
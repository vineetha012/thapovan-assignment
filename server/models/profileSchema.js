const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const ProfileSchema=new Schema({
    name:{type: String},
    Image: {type: String},
    DOB: {type: String},
    skills: {type: String},
    gender:{type:String},
    experience: {type: String},
    linkedIn:{type: String},
    userref: [{type: Schema.Types.ObjectId, ref: 'User'}]
})
const profileModel=mongoose.model('profile',ProfileSchema)
module.exports=profileModel
const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({

    name:{
        type:String,
    },
    email:{
      type:String,
      required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    Events:{
        type:Array,
        of:String
    },
    
})
module.exports=mongoose.model("User",UserSchema)
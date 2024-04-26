const mongoose =require('mongoose')

const eventSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    description:
    {
        type:String,
        required:true,
    },
    fees:{
        type:Number
    },
    photo:{
        type:String,
    },
    id:{
        type:Number
    }
})
mongoose.model("Event",eventSchema)
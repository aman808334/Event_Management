const express=require('express')
const router=express.Router();
const mongoose=require('mongoose')
const Event=mongoose.model('Event')

router.get('/events', async (req,res)=>{
   
    try{
    const eventList= await Event.find()
    res.json(eventList)
    }
    catch(err)
    {
       res.json({meassage:"error"})
    }
})
router.get('/events/:id', async (req,res)=>{
   var id1=req.param.id
    try{
    const eventList= await Event.find({id:id1})
    res.json(eventList)
    }
    catch(err)
    {
       res.json({meassage:"error"})
    }
})

router.post('/createevent', (req,res)=>
{
    const event=new Event({
        name:req.body.name,
        description:req.body.description,
        fees:req.body.fees,
        photo:req.body.photo,
        id:req.body.id
    });

    event.save().then(result=>{
        console.log(result)
        res.json({event:result})
    }).catch(err=>{
        res.json({meassage:"eror"})
    })
})

module.exports=router
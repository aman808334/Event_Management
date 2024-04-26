const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const User=mongoose.model('User')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require('../key')
const requireLogin=require('../middleware/requireLogin')
router.get('/protected',requireLogin,(req,res)=>{
    res.send("Hello user")
})
router.post('/signup',(req,res)=>{
    const {name,email,password,isAdmin,Events}=req.body;
    if(!email||!password)
    {
        res.status(422).json({error:"complete the fields required"});
    }
    User.findOne({email:email}).then((savedUser)=>{
     if(savedUser)
     {
         return res.status(422).json({error:"User already exists"})
     }
     bcrypt.hash(password,12).then(hashedpassword=>{
        const user=new User({
            name,
            email,
            password:hashedpassword,
            isAdmin:isAdmin,
            Events:Events
        })
        user.save().then(user=>{
            res.json({message:"succesfully saved"})
        }).catch(err=>{
            console.log(err)
        })
     })
     
    }).catch(err=>{
        console.log(err)
    })
   
})
router.post('/signin',(req,res)=>{
    const {email,password}=req.body
    if(!email||!password)
    {
       return  res.status(422).json({error:"Please add email or password"})
    }
    User.findOne({email:email}).then(savedUser=>{
        if(!savedUser)
        {
            return res.status(422).json({error:"invalid email or paasword"})
        }
        bcrypt.compare(password,savedUser.password).then(doMatch=>{
            if(doMatch)
            {
                //return res.json({message:"succesfylly signed in"})
                const token=jwt.sign({_id:savedUser._id},JWT_SECRET)
                return res.json({token})
            }
            else{
                return res.status(422).json({error:"Invalid password"})
            }
        })
    }).catch(err=>{
        console.log(err)
    })
})
router.get("/user/:id",async(req,res)=>{
  var id1=req.params.id;
    try{
        const userdetail=await User.find({_id:id1})
        res.json(userdetail)
    }
    catch(err){
      res.json({message:"error"})
    }
})
router.get("/user",async(req,res)=>{

    try{
        const userdetail=await User.find()
        res.json(userdetail)
    }
    catch(err){
      res.json({message:"error"})
    }
})
router.patch("/user/:id",async(req,res)=>{
    
    try{
        const updated=await User.updateOne({_id:req.params.id},{$push:{Events:req.body.Events}});
        res.json(updated);
    }
    catch(err)
    {
        console.log(err);
    }
  })
module.exports=router
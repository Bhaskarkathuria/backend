const express=require('express');
const router=express.Router();
const sequelize=require('../config/database');
const User=require('../model/user');
const user=require('../model/user');


router.post('/',(req,res,next)=>{
    const email=req.body.email
    user.findOne({where:{email}})
    .then(existingUser=>{
        if(existingUser){
            const errormessage='Email already exist'
         res.status(400).send(errormessage)
        }else{
                user.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    .then(result=>{
        return res.json({success:true,message:"Sign up successful"})
    })
    .catch(err=>{
        console.log(err)
    })
        }
    })


    
})
router.get('/',(req,res,next)=>{
    user.findAll()
    .then(result=>{
        res.json(result)
})
    .catch(err=>{
        console.log(err)
    })
})

module.exports=router;

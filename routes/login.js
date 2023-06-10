const express=require('express');
const router=express.Router();
const sequelize=require('../config/database');
const user=require('../model/user');


router.post('/',(req,res,next)=>{
    // console.log(req.body);
    const password=req.body.password;
    const email=req.body.email;
    user.findOne({where:{email}})
    .then( existingUser=>{
       // console.log(existingUser.password)
        if(existingUser){
            if(existingUser.password===password){
                return res.status(200).json({sucess:true,message:"User logged In Successfully"})
            }else{
                return res.status(400).json({success:false,message:"Password is Incorect"})
            }
        }
        else{
            return res.json({success:false,message:"User does not exist"})
            
        }
    }
    )
    .catch(err=>{
        const errormessage='server error'
         res.status(400).send(errormessage)
    })
})

module.exports=router;
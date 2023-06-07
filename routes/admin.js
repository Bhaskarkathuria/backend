const express=require('express');
const router=express.Router();
const sequelize=require('../config/database');
const User=require('../model/user');
const user=require('../model/user');


router.post('/',(req,res,next)=>{
    user.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    .then(result=>{
        res.send(' Info Added to database')
    })
    .catch(err=>{
        console.log(err)
    })

})
router.get('/',(req,res,next)=>{
    user.findAll()
    .then(result=>[
        res.json(result)
    ])
    .catch(err=>{
        console.log(err)
    })
})

module.exports=router;

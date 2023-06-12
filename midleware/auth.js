const jwt=require('jsonwebtoken');
const User=require('../model/user');

const authenticate = (req,res,next)=>{
    try{
        const token=req.header('Authorisation');
        console.log(token)
        const userid=jwt.verify(token,'my_secret_key');
        User.findByPk(userid).then(user=>{
            console.log(JSON.stringify(user))
            req.user=user
            next();
        })
        .catch(err=>{
            console.log(err)
        })
    }catch(err){
        console.log(err);
        return res.status(400).json({sucess:false})
    }
}

module.exports={authenticate}
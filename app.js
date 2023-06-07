const Sequelize=require('sequelize');
const sequelize=require('./config/database');
const express=require('express');
const adminRoutes=require('./routes/admin');
const bodyParser=require('body-parser');
const app=express();
const cors=require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res,next)=>{
    res.send('Server listening on port 5000')
})

app.use('/todo',adminRoutes)

sequelize.sync()
.then(result=>{
    console.log(result)
    app.listen(5000);
})
.catch(error=>{
    console.log(error)
})
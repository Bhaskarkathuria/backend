const Sequelize=require('sequelize');
const sequelize=require('./config/database');
const express=require('express');
const adminRoutes=require('./routes/admin');
const bodyParser=require('body-parser');
const app=express();
const cors=require('cors');
const userRoutes=require('./routes/login')
const expenseRoutes=require('./routes/expense')
const userinfo=require('./model/user')
const expense=require('./model/expensemodel')



app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res,next)=>{
    res.send('Server listening on port 5000')
})

app.use('/signup',adminRoutes)
app.use('/login',userRoutes)
app.use('/expenses',expenseRoutes)


userinfo.hasMany(expense);
expense.belongsTo(userinfo);



sequelize.sync({alter:true})
.then(result=>{
    console.log(result)
    app.listen(5000);
})
.catch(error=>{
    console.log(error)
})




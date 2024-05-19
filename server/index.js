const express =require('express');

// import {User} from './user'

const  Users =require('./user');

const app=express();

// console.log(Users);


const cors=require('cors');

app.use(cors());


app.get('/',(req,res)=>{

res.json(Users);

})


app.listen(5000,()=> console.log("API IS WORKING"));
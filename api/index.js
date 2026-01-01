import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();


mongoose.connect(process.env.MONGODB_URI).then(()=>{

    console.log("connected to mongodb")
}).catch((err)=>{
    console.log("error connecting to mongodb", err)
})



app.listen(3000, ()=>{
    console.log("server running on 3000")
})

const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const path =require('path')
const port = 5000;
 
//midlewares    
app.use(express.json())
app.use('/api/v1/tasks' , tasks)


const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port , ()=>{console.log(`app is listening on ${port}`);})
    } catch (error) {
        console.log(error);
    }
};
start();



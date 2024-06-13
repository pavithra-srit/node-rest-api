import loginRoute from './src/login.js';
import express from 'express';
import cors from 'cors';
import planRoute from './src/plan.js';

// const client = new Client({
//     user :'NPavithra',
//     password:'pn@2024',
//     host:'localhost',
//     port:'5432',
//     database:'travel_plan'}
// )
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use('/login',loginRoute);
app.use('/plan', planRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Port", PORT)
    });
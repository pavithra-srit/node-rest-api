import loginRoute from './src/login.js';
import express from 'express';

const app = express()

app.use('/login',loginRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Port", PORT)
    });
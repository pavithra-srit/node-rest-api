import express from 'express';
import {loginUserDetailIndex, loginUserIndex} from './controllers/login.controller.js'

const loginRoute = express.Router()


// CRUD functionality

// R - to read data
loginRoute.get('/status',loginUserDetailIndex);

// C- to create data

loginRoute.post('/user', loginUserIndex)


export default loginRoute
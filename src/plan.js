import express from "express"
import { viewPlanIndex, createPlanIndex,savePlanIndex, deletePlanIndex
 } from "./controllers/plan.controller.js"


const planRoute = express.Router()


// CRUD functionality

// R - to read data
planRoute.get('/viewPlan',viewPlanIndex )

// C- to create data

planRoute.post('/createPlan', createPlanIndex)


// U - to update data

planRoute.put('/savePlan',savePlanIndex)


// D- to delete data

planRoute.delete('/deletePlan',deletePlanIndex)


export default planRoute
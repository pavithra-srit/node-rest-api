import express from 'express';
import fs from 'fs';


const loginRoute = express.Router()


// CRUD functionality

// R - to read data
loginRoute.get('/status',(request,response)=>{
    const obj ={
        "status":"Pass"
    };
    response.send(obj)
});

// C- to create data

loginRoute.post('/user', (request,response)=>{

    var data = fs.readFileSync("UserDetails.json")
    var myObj = JSON.parse(data)
    let newUser ={
       
        name:"Pavi",
        password:"bharath"
    }

    myObj.push(newUser)
    // myObj = request.body
    var mystr =  JSON.stringify(myObj)
       response.end(mystr)
    fs.writeFile("UserDetails.json",mystr,
        err =>{
            if(err) throw err
            console.log("Added New Data")
        }
       
    )
})

// U - to update data

loginRoute.put('',(req, res)=>{

})



// D- to delete data

loginRoute.delete('',(req,res)=>{
    
})

export default loginRoute
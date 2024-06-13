import fs from 'fs';


export const loginUserDetailIndex = (request,response)=>{
    const obj ={
        "status":"Pass"
    };
    response.send(obj)
}

export const loginUserIndex = (request,response)=>{


    var data = fs.readFileSync("UserDetails.json")
    var myObj = JSON.parse(data)
    let newUser = {
       
        name:request.body.name,
        password:request.body.password
    }

    myObj.push(newUser)
    // myObj = request
    var mystr =  JSON.stringify(myObj)
    fs.writeFile("UserDetails.json",mystr,
        err =>{
            if(err){
                const resData ={
                    "status":"400",
                    "msg":"Bad Request"
                }
                res.send(resData)
                res.end()
            }
                else{
            const resData ={
                "status":"200",
                "msg":"Logged In Successfully!"
            }
                    response.status(200).json(resData);
                    response.end()
                }
            console.log("Added New Data")
        }
       
    )
}
import fs from 'fs';

export const viewPlanIndex = (req,res)=>{
   
    var data = fs.readFileSync("planDetails.json")
    var obj = JSON.parse(data)
    var strData =  JSON.stringify(obj)
    res.end(strData)
}
export const createPlanIndex2 = async (req,res)=>{
    let newPlan = {
        id:req.body.id,
        place:req.body.place,
        vaccationType:req.body.vaccationType,
        besttime:req.body.besttime,
        modeofTransport:req.body.modeofTransport,
        duration:req.body.duration,
        startdate:req.body.startdate,
        enddate:req.body.enddate,
        attraction:req.body.attraction,
        note:req.body.note
    }
try {
    const a = await newPlan.save()
    return res.status(200).json(a)
} catch (error) {
    return res.status(400).json({message:error.message})

}
}
export const createPlanIndex = (req,res)=>{
    var data = fs.readFileSync("planDetails.json")
    var myObj = JSON.parse(data)
    let newPlan = {
        id:req.body.id,
        place:req.body.place,
        vaccationType:req.body.vaccationType,
        besttime:req.body.besttime,
        modeofTransport:req.body.modeofTransport,
        duration:req.body.duration,
        startdate:req.body.startdate,
        enddate:req.body.enddate,
        attraction:req.body.attraction,
        note:req.body.note
    }
    myObj.push(newPlan)
    var strData =  JSON.stringify(myObj)
    

    fs.writeFile("planDetails.json",strData,
        err =>{
            if(err) {
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
                    "msg":"Created New Plan Successfully!"
                }
                res.send(resData)
                res.end()
            }     
           }
      
    )
      
          
    
}

export const savePlanIndex = (req,res)=>{

}

export const deletePlanIndex = (req,res)=>{
    var data = fs.readFileSync("planDetails.json")
    var myObj = JSON.parse(data)
    var ids = req.body.id

    ids.forEach((element) => {
            let itemIndex = (myObj.findIndex(item => item.id === element)); 
             myObj.splice(itemIndex, 1);
        })

        var strData =  JSON.stringify(myObj)
    

        fs.writeFile("planDetails.json",strData,
            err =>{
                if(err) {
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
                        "msg":"Deleted Selected Plan(s) Successfully!"
                    }
                    res.send(resData)
                    res.end()
                }     
               })
 

}
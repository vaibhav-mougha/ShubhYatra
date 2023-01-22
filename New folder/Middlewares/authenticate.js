const jwt=require("jsonwebtoken")
const {RegisterModule}=require("../Models/UsersModule")
const KEY = process.env.SecretKey;
const authenticate=(req,res,next)=>{
   const token=req.headers.authorization
    // console.log(token)
    if(token){
        const decoded=jwt.verify(token,KEY)
        if(decoded){
            const userID=decoded.userID
            // console.log(decoded,userID)
            // req.body.userID=userID
            next()
        }
        else{
            res.send("please login first")
        }
    }
    else{
        res.send("Please Login First")
    }
}

const AdminAuthenticate=async(req,res,next)=>{
    if(req.method=="POST" || req.method=="DELETE" || req.method=="PATCH"){
        const token=req.headers.authorization
    const decoded=jwt.verify(token,"masai")
    const userID=decoded.userID
    try{
        const {email}=await RegisterModule.findOne({"_id":userID})
        console.log(email)
        if(email=="admin@shubhyatra.com"){
         next()
        }else{
         res.send("you not authorized")
        }
     }catch{
        res.send("aaa")
     }
    }else{
        next()
    }
    
}
module.exports={
    authenticate,
    AdminAuthenticate
}
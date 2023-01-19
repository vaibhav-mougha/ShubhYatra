const express=require("express")
const jwt=require("jsonwebtoken")
const usersRoute=express.Router()
const {RegisterModule}=require("../Models/UsersModule")
const {authenticate}=require("../Middlewares/authenticate")
const {login}=require("../Middlewares/Validetor")

const bcrypt = require('bcrypt');
usersRoute.use(login)

usersRoute.post("/register",async (req,res)=>{
  const {name,email,password,phone}=req.body
  if(name && email && password && phone){
    try{
      const cheak=await RegisterModule.find({"email":email})
      if(cheak.length>0){
        res.send("Email already register")

      }else{
        bcrypt.hash(password, 8, async (err, hash)=>{
          const user=new RegisterModule({name,email,password:hash,phone})
          await user.save()
          res.send("Registered")
          res.status(201).json({"message":"Registered",user});
        });
      }
      
      }catch(err){
        res.status(401).json({
          error,
          message: "Something went wrong",
        });
      
      }
  }else{
    res.send("Fill All Details")
  }
  })
// usersRoute.get("/",async(req,res)=>{
//   try{
//    const data=await RegisterModule.find()
//    res.send(data)
//   }
//   catch{
//     res.send("err")
//   }
// })

// usersRoute.delete("/delete/:id",async(req,res)=>{
//   const id=req.params.id
//   try{
//     await RegisterModule.findByIdAndDelete({"_id":id})
//     res.send("deleted")
//   }
//   catch{
//     res.send("err")
//   }
// })
  usersRoute.post("/login",async (req,res)=>{
    const {email,password}=req.body
    try{
    const user=await RegisterModule.find({email})
    if(user.length>0){
    bcrypt.compare(password, user[0].password, function(err, result) {
    if(result){
    const token = jwt.sign({ userID:user[0]._id }, 'masai');

    res.status(201).json({"msg":"Login Successfully","token":token});
    } else {res.send("Wrong Credntials")}
    });
    } else {
    res.send("Wrong Credntials")
    }
    } catch(err){
      res.status(401).json({
        error,
        message: "Something went wrong",
      });
    
    }
    })

module.exports={
    usersRoute
}

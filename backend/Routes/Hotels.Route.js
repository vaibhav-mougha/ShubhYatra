const express=require("express")
const hotelsRoute=express.Router()
const {HotelModel}=require("../Models/Hotels.Model")

hotelsRoute.get("/",async(req,res)=>{

    const rating=req.query.rating
    const price=req.query.price
    const star_category=req.query.star_category
    const property_type=req.query.property_type
    const location=req.query.location

    if(rating || price || star_category || property_type || location)
    {
        try{
            const data=await HotelModel.find({$or:[{"rating":rating},{"price":price},{"star_category":star_category},{"property_type":property_type},{"location":location}]})
            res.send(data)
           }
           catch{ 
              res.send("err")
           } 
    }else{
        try{
            const data=await HotelModel.find()
            res.send(data)
           }
           catch{ 
              res.send("err")
           } 
    }
   
})
hotelsRoute.delete("/delete/:id",async (req,res)=>{
    const id=req.params.id
    try{
        await HotelModel.findByIdAndDelete({"_id":id})
        res.send("deleted")
    }catch{
        res.send("err")
    }
})
hotelsRoute.post("/addhotels",async(req,res)=>{
     const payload=req.body
     try{
        const hotel=new HotelModel(payload)
        await hotel.save()
        res.send("hotel")
     }catch{
         res.send("err")
     }
})
module.exports={
    hotelsRoute
}
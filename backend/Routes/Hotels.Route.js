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
            const { page = 1, limit = 10 } = req.query;
            const data=await HotelModel.find({$or:[{"rating":{$gte:rating}},{"price":{$lte:price}},{"star_category":{$gte:star_category}},{"property_type":property_type},{"location":location}]}) .limit(limit * 1)
            .skip((page - 1) * limit);
            // res.send(data)
            res.status(200).json({data})
           }
           catch{ 
            res.status(401).json({
                error,
                message: "Something went wrong in getting all the hotels present",
              })
           } 
    }else{
        try{
            const { page = 1, limit = 10 } = req.query;
            const data=await HotelModel.find() .limit(limit * 1)
            .skip((page - 1) * limit);
            res.status(200).json({data})
           }
           catch{ 
            res.status(401).json({
                error,
                message: "Something went wrong in getting all the hotels present",
              })
           } 
    }
   
})

hotelsRoute.get("/:id",async(req,res)=>{
    const id=req.params.id
    try{
       const data=await HotelModel.findOne({"_id":id})
       res.send(data)
    }
    catch{
       res.send("Err")
    }
})


hotelsRoute.delete("/delete/:id",async (req,res)=>{
    const id=req.params.id
    try{
        await HotelModel.findByIdAndDelete({"_id":id})
        res.json({status: 200, "message":"Deleted The Hotels"});
    }catch{
        res.status(401).json({
            error,
            message: "Something went wrong",
          });
    }
})
hotelsRoute.post("/addhotels",async(req,res)=>{
     const payload=req.body
     try{
        const hotel=new HotelModel(payload)
        await hotel.save()
        res.status(201).json({"message":"Created The Hotels",hotel});
     }catch{
        res.status(401).json({
            error,
            message: "Something went wrong",
          });
     }
})
module.exports={
    hotelsRoute
}
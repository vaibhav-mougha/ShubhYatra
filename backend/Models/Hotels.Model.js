const mongoose=require("mongoose")
const hotelsSchema=mongoose.Schema({
    "name":String,
    "image":String,
    "rating":Number,
    "verified_rating":String,
    "rate":Number,
    "price":Number,
    "tax":Number,
    "star_category":Number,
    "property_type":String,
    "location":String
})
const HotelModel=mongoose.model("hotels",hotelsSchema)

module.exports={
    HotelModel
}
const mongoose = require("mongoose");

const flightSchema=mongoose.Schema({
  name:String,
  from:String,
  to:String,
  start:String,
  end:String,
  type:String,
  price:Number,
  duration:String
})

const FlightModel = mongoose.model("bookedflight", flightSchema);

module.exports = {
  FlightModel,
};

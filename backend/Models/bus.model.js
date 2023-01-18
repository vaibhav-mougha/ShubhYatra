const mongoose = require('mongoose');

//Created a schema for the bus 

const busSchema=mongoose.Schema({
    name:String,
    from:String,
    to:String,
    start:String,
    end:String,
    type:String,
    price:Number,
    duration:String
})

const Busmodel=mongoose.model("bus",busSchema)

module.exports = Busmodel
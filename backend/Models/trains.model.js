const mongoose = require("mongoose");

const TrainsSchema = mongoose.Schema({
    name: {type:String, required:true},
    arrival: {type:String, required:true},
    departure: {type:String, required:true},
    from : {type:String, required:true},
    to: {type:String, required:true},
    date: {type:String, required:true},
    classtype: {type:String, required:true},
    price: {type:Number, required:true}
});

const TrainsModel = mongoose.model("train", TrainsSchema);

module.exports = { TrainsModel };


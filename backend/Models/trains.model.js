const mongoose = require("mongoose");

const TrainsSchema = mongoose.Schema({
    name: String,
    arrival: String,
    departure: String,
    from : String,
    to: String,
    classtype: String,
    price: Number
});

const TrainsModel = mongoose.model("train", TrainsSchema);

module.exports = { TrainsModel };


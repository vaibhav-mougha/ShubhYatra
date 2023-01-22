const mongoose = require("mongoose");

//Created a schema for the bus

const busSchema = mongoose.Schema({
  name: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
});

const Busmodel = mongoose.model("bus", busSchema);

module.exports = Busmodel;

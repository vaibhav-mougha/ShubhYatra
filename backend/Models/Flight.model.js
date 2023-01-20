const mongoose = require("mongoose");

const flightSchema = mongoose.Schema({
  name: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
});

const FlightModel = mongoose.model("bookedflight", flightSchema);

module.exports = {
  FlightModel,
};

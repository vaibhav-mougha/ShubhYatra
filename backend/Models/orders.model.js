const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  name: String,
  image: String,
  rating: Number,
  verified_rating: String,
  rate: Number,
  price: Number,
  tax: Number,
  star_category: Number,
  property_type: String,
  location: String,
  from: String,
  to: String,
  start: String,
  end: String,
  type: String,
  duration: String,
  email: String,
});
const OrderModel = mongoose.model("order", orderSchema);

module.exports = {
  OrderModel,
};

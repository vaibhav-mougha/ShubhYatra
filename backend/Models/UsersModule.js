const mongoose = require("mongoose");
const registerSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  password: String,
});

const RegisterModule = mongoose.model("users", registerSchema);
module.exports = {
  RegisterModule,
};

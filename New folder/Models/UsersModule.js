const mongoose = require("mongoose");
const registerSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});

const RegisterModule = mongoose.model("users", registerSchema);
module.exports = {
  RegisterModule,
};

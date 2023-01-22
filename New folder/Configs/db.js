require("dotenv").config();
const URL = process.env.MongoURl;
const mongoose = require("mongoose");

const connection = mongoose.connect(URL);

module.exports = {
  connection,
};

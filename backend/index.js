require("dotenv").config();
const PORT = process.env.port;
const busRouter=require("./Routes/bus.routes")
const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./configs/db");

//Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/bus",busRouter)

app.get("/", (req, res) => {
  res.send("Welcome Home Page");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
  } catch (error) {
    console.log(error);
  }
  console.log(`Server is running at PORT : ${PORT}`);
});

require("dotenv").config();
const PORT = process.env.port;
const busRouter=require("./Routes/bus.routes")
const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./configs/db");
const {hotelsRoute}=require("./Routes/Hotels.Route")
const { authenticate} =require("./Middlewares/authenticate");
const { usersRoute } =require("./Routes/User.Route")
//Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
//user Route
app.use("/users",usersRoute)
//Authenticate
app.use(authenticate)
//Hotels Route
app.use("/hotels",hotelsRoute)
//Bus Route
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

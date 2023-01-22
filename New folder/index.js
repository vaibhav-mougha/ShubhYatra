require("dotenv").config();
const PORT = process.env.port;
const busRouter=require("./Routes/bus.routes")
const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./configs/db");
const {hotelsRoute}=require("./Routes/Hotels.Route")
const { authenticate,AdminAuthenticate} =require("./Middlewares/authenticate");
const { usersRoute } =require("./Routes/User.Route")
const { flightRouter } = require("./Routes/Flight.route");
const OrderRouter = require("./Routes/order.route");
const { TrainsRoute } = require("./Routes/trains.routes");

//Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
//user Route
app.use("/users",usersRoute)
//Order Route
app.use("/order", OrderRouter)
//Authenticate
app.use(authenticate)
//Admin Authenticate
app.use(AdminAuthenticate)
//Hotels Route
app.use("/hotels",hotelsRoute)
//Bus Route
app.use("/bus",busRouter)
// Booked Flight Route
app.use("/bookedflight", flightRouter);
//Order Route

// Trains Route
app.use("/trains", TrainsRoute);

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

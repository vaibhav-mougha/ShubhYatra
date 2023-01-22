const express = require("express");
const { OrderModel } = require("../Models/orders.model");

const OrderRouter = express.Router();
OrderRouter.use(express.json());

//geting order data from email address
OrderRouter.get("/", async (req, res) => {
  const { email } = req.query;
  if (email) {
    let data = await OrderModel.find({ email: email });
    try {
      res.send(data);
    } catch (err) {
      console.log("err", err);
    }
  } else {
    let data = await OrderModel.find();
    res.send(data);
  }
});

//adding order data

OrderRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const newOrder = new OrderModel(payload);
    await newOrder.save();
    res.send("New Order successfully Added");
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ msg: err });
  }
});

module.exports = OrderRouter;

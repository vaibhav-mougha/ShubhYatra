const express = require("express");
const { FlightModel } = require("../Models/Flight.model");

const flightRouter = express.Router();

flightRouter.use(express.json());

// Only for LOGGED in USERS
// Flight Details are shown with queries FROM & TO

flightRouter.get("/", async (req, res) => {
  const { from, to, sort, filter, q } = req.query;
  try {
    if (from && to) {
      let data = await FlightModel.find();
      let filteredData = data.filter((i) => {
        return (
          i.from.toLowerCase().includes(from.toLowerCase()) &&
          i.to.toLowerCase().includes(to.toLowerCase())
        );
      });
      if (filteredData.length > 0) {
        if (sort) {
          if (sort === "lowToHigh") {
            res.send(filteredData.sort((a, b) => a.price - b.price));
          } else if (sort === "highToLow") {
            res.send(filteredData.sort((a, b) => b.price - a.price));
          } else if (sort === "earlyDeparture") {
            filteredData.sort(
              (a, b) => a.start.split(":")[0] - b.start.split(":")[0]
            );
            res.send(filteredData);
          } else if (sort === "lateDeparture") {
            filteredData.sort(
              (a, b) => b.start.split(":")[0] - a.start.split(":")[0]
            );
            res.send(filteredData);
          } else if (sort === "duration") {
            filteredData.sort(
              (a, b) => a.duration.split("hrs")[0] - b.duration.split("hrs")[0]
            );
            res.send(filteredData);
          }
        } else if (filter) {
          if (filter === "Pmorning") {
            let morningData = filteredData.filter(
              (i) => i.start.split(":")[0] > 6 && i.start.split(":")[0] <= 11
            );
            res.send(morningData);
          } else if (filter === "Pafternoon") {
            let afternoon = filteredData.filter(
              (i) => i.start.split(":")[0] > 11 && i.start.split(":")[0] <= 18
            );
            res.send(afternoon);
          } else if (filter === "Pevening") {
            let evening = filteredData.filter(
              (i) => i.start.split(":")[0] > 18 && i.start.split(":")[0] <= 22
            );
            res.send(evening);
          } else if (filter === "Pnight") {
            let night = filteredData.filter(
              (i) => +i.start.split(":")[0] > 22 || +i.start.split(":")[0] <= 6
            );
            res.send(night);
          } else if (filter === "Dmorning") {
            let morningData = filteredData.filter(
              (i) => i.end.split(":")[0] > 6 && i.end.split(":")[0] <= 11
            );
            res.send(morningData);
          } else if (filter === "Dafternoon") {
            let afternoon = filteredData.filter(
              (i) => i.end.split(":")[0] > 11 && i.end.split(":")[0] <= 18
            );
            res.send(afternoon);
          } else if (filter === "Devening") {
            let evening = filteredData.filter(
              (i) =>
                i.end.split(":").map(Number)[0] > 18 &&
                i.end.split(":")[0] <= 22
            );
            res.send(evening);
          } else if (filter === "Dnight") {
            let night = filteredData.filter(
              (i) =>
                +i.end.split(":").map(Number)[0] > 22 ||
                +i.end.split(":").map(Number)[0] <= 6
            );
            res.send(night);
          } else if (filter === "non") {
            let d = "non";
            let acFilter = filteredData.filter(
              (i) => !i.type.toLowerCase().includes(d.toLowerCase())
            );
            res.send(acFilter);
          } else if (filter === "luck") {
            let d = "non";
            let nacFilter = filteredData.filter((i) =>
              i.type.toLowerCase().includes(d.toLowerCase())
            );
            res.send(nacFilter);
          }
        } else {
          res.send(filteredData);
        }
      } else {
        res.send("Sorry there is no flight available");
      }
    } else if (q) {
      const { page = 1, limit = 10 } = req.query;
      let data = await FlightModel.find({ from: q })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    } else {
      const { page = 1, limit = 10 } = req.query;
      let data = await FlightModel.find()
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    }
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ err: err });
  }
});

flightRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await FlightModel.findById(id);
  res.send(data);
});

// Strictly for ADMIN only

flightRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const newFlight = new FlightModel(payload);
    await newFlight.save();
    res.send({ newFlight, message: "New Flight successfully Added" });
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ msg: err });
  }
});

// flightRouter.patch("/update/:id", async (req, res) => {
//   const payload = req.body;
//   const id = req.params.id;
//   const flight = await FlightModel.find({ _id: id });
//   const userID_in_flight = flight.userID;
//   const userID_making_req = req.body.userID;

//   try {
//     if (userID_making_req !== userID_in_flight) {
//         res.status(401).json({
//             message: "You Are Not Authorized"
//           });
//     } else {
//       await FlightModel.findByIdAndUpdate({ _id: id }, payload);
//       res.json({status: 200, "message":"Updated The Flight"});
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(401).json({
//         error,
//         message: "Something went wrong",
//       });
//   }
// });

flightRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await FlightModel.findByIdAndDelete({ _id: id });
    res.json({ status: 200, message: "Deleted The Flight" });
  } catch {
    res.send("err");
  }
});

module.exports = {
  flightRouter,
};

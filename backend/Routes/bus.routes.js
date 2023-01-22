const express = require("express");
const Busmodel = require("../Models/bus.model");
const busRouter = express.Router();
busRouter.use(express.json());

//for gaeting bus informations we req 2 queries firstone is from and secondone is to
//toLowercase is use to check the

busRouter.get("/", async (req, res) => {
  const { from, to, sort, filter, q } = req.query;
  try {
    if (from && to) {
      let data = await Busmodel.find();
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
          } else if (filter === "ac") {
            let d = "non";
            let acFilter = filteredData.filter(
              (i) => !i.type.toLowerCase().includes(d.toLowerCase())
            );
            res.send(acFilter);
          } else if (filter === "nac") {
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
        res.send("Sorry there is no bus available");
      }
    } else if (q) {
      const { page = 1, limit = 10 } = req.query;
      let data = await Busmodel.find({ from: q })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    } else {
      const { page = 1, limit = 10 } = req.query;
      let data = await Busmodel.find()
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    }
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ err: err });
  }
});

busRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await Busmodel.findById(id);
  res.send(data);
});

//bus is added with help of busRouter

busRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const newBus = new Busmodel(payload);
    await newBus.save();
    res.send("New Bus successfully Added");
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ msg: err });
  }
});

//use update to add the price for multiple data

// busRouter.patch("/update",async(req,res)=>{
//     Busmodel.updateMany({"start":"1300"},{"start":"13:00","end":"19:00","duration":"36hrs30min"},(err,doc)=>{
//     if(err){
//         console.log('err :>> ', err);
//     }else{
//         console.log('doc :>> ', doc);
//         res.send(doc)
//     }
//    })
// })

busRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Busmodel.findByIdAndDelete({ _id: id });
    res.send("deleted");
  } catch {
    res.send("err");
  }
});

module.exports = busRouter;

const express = require("express");
const { TrainsModel } = require("../Models/trains.model");

const TrainsRoute = express.Router();


//get trains 
TrainsRoute.get("/listing", async (req, res) => {
    const {from, to, date} = req.query;
    
    try{
        const data = await TrainsModel.find();
        if(!data){
            return req.send("There is no data present for trains.");
        }

        if(from && to){
            const filteredData = data.filter((i) => {
                return i.from.toLowerCase().includes(from.toLowerCase()) 
                && i.to.toLowerCase().includes(to.toLowerCase());
            });

            console.log(filteredData);
            res.send(filteredData);
        }
        else {
            res.send(data);
        }


    } catch (e){
        res.send({error: e.message});
    }
   

});


//get train details using id
TrainsRoute.get("/listing/:id", async (req, res) => {
    const { id } = req.params;

    if(!id){
        return res.send("Please Add Train id to get result");
    }

    try{
        const train = await TrainsModel.find({_id:id});
        if(train){
            res.send(train);
        } else {
            res.send("No train found!");
        }

    } catch (e){
        res.send({error: e.message});
    }
    
})

//get train details using name
TrainsRoute.get("/:name", async (req, res) => {
    const { name } = req.params;

    if(!name){
        return res.send("Please Add Train name to get result");
    }

    try{
        const trains = await TrainsModel.find({name:name});
        console.log(trains);
        if(trains){
            res.send(trains);
        } else {
            res.send("No train found!");
        }

    } catch (e){
        res.send({error: e.message});
    }
    
})


// add new train using admin account
TrainsRoute.post("/addtrain", async (req, res) => {
    const { name, arrival, departure, from, to, classtype, price, date } = req.body;

    if(!name || !arrival || !departure || !from || !to || !classtype || !price || !date){
        return res.send("Please fill all feilds!");
    }

    try {
        const train = new TrainsModel({name, arrival, departure, from, to, date, classtype, price});
        await train.save();
        res.send("New train added successfully.");
    } catch (e) {
        res.send({error: e.message});
    }

});


//update trains data using id
// update route for admin user
TrainsRoute.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    if(!payload){
        return res.send("Please add new data!");
    } else if(!id){
        return res.send("Required Train Id for updating the data!");
    }

    try {
        await TrainsModel.findOneAndUpdate({_id:id}, payload);
        res.send("Train data has been updated.");

    } catch (e){
        res.send(e.message);
    }
    
});


// delete route for admin user
TrainsRoute.delete("/:id", async (req, res) => {
    const { id } = req.params;
   
   if(!id){
        return res.send("Required Train Id for deleting the train data!");
    }

    try {
        await TrainsModel.findOneAndDelete({_id:id});
        res.send("Train data has been deleted.");
        
    } catch (e){
        res.send(e.message);
    }
    
});


module.exports = { TrainsRoute };



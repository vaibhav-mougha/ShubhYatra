const express = require("express");
const jwt = require("jsonwebtoken");
const usersRoute = express.Router();
const { RegisterModule } = require("../Models/UsersModule");
const { authenticate } = require("../Middlewares/authenticate");
const { login } = require("../Middlewares/Validetor");

const bcrypt = require("bcrypt");

//registered data using signup page
//if email already registered then redirected to login page

usersRoute.post("/register", async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    if (name && email && password && phone) {
      const cheak = await RegisterModule.find({ email: email });
      if (cheak.length > 0) {
        res.status(401).json({ message: "Email already register" });
      } else {
        bcrypt.hash(password, 8, async (err, hash) => {
          const user = new RegisterModule({
            name,
            email,
            password: hash,
            phone,
          });
          await user.save();
          // res.send("Registered")
          res.status(201).json({ message: "Registered", user });
        });
      }
    }
  } catch (err) {
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

usersRoute.use(login);

//geting users data for users admin page

usersRoute.get("/", async (req, res) => {
  const { name } = req.query;
  const { email } = req.query;
  try {
    //  let data=await RegisterModule.find()
    if (name) {
      const { page = 1, limit = 5 } = req.query;
      let data = await RegisterModule.find({ name: name })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    } else if (email) {
      const data = await RegisterModule.find({ email: email });
      res.send(data[0]);
    } else {
      const { page = 1, limit = 5 } = req.query;
      let data = await RegisterModule.find()
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    }
  } catch {
    res.send("err");
  }
});

//deleting the data using id

usersRoute.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await RegisterModule.findByIdAndDelete({ _id: id });
    res.send("Deleted");
  } catch {
    res.send("err");
  }
});

//loging the data from login page

usersRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await RegisterModule.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, function (err, result) {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, "masai");

          res.send({
            msg: "Login Successfull",
            token: token,
            name: user[0].name,
            email: user[0].email,
          });
        } else {
          res.send("Wrong Credntials");
        }
      });
    } else {
      res.send("Wrong Credntials");
    }
  } catch (err) {
    res.status(401).json({
      error,
      message: "Something went wrong",
    });
  }
});

module.exports = {
  usersRoute,
};

const express = require("express");
const mongo = require("mongoose");
var cors = require('cors')
const app = express();
require("./userDetails");
require("./timeuser");
require("./pets");
const User = mongo.model("userInfo");
const Time = mongo.model("time");
const pets = mongo.model("pets");


const mongoUrl = "mongodb+srv://kaido:animes01@ventiamino.pjmrmom.mongodb.net/?retryWrites=true&w=majority";
mongo.connect(mongoUrl, {
    useNewUrlParser: true}).then(()=> {console.log("Connected to the database");})
    .catch((e)=> {console.log(e);}); 

app.use(express.json())
app.use(cors())




app.listen(5000,() => {console.log("Server started");});

app.post("/register", async (req, res) => {
    const { username, email, password, raza, nombre_perro} = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        res.send({status: "registred"});
      }
      else{
        await User.create(
          {      
              username: username,
              email: email,
              password: password,
              raza: raza,
              nombreperro: nombre_perro,
          });
          res.send({status: "ok"});
      }
    } catch (error) {
        res.send({status: "error en registro"})
    }
})


app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        if (user.password === password) {
          res.send({ status: "ok" });
        } else {
          res.send({ status: "incorrect password" });
        }
      } else {
        res.send({ status: "No registred" });
      }
    } catch (error) {
      res.send({ status: "Error" });
    }
  });

app.post("/time", async (req, res) => {
  const { userId, hour, minute } = req.body;

  try {
    const newTime = new Time({
      userId: userId,
      hour: hour,
      minute: minute,
    });
    await newTime.save();
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "Error" });
  }
});

app.post("/pets", async (req, res) => {
  const { userId, nombre, raza, peso } = req.body;
  try {
    const newTime = new pets({
      userId: userId,
      name: nombre,
      race: raza,
      weight: peso
    });
    await newTime.save();
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "Error" });
  }
});
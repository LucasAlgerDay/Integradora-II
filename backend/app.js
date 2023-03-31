const express = require("express");
const mongo = require("mongoose");
var cors = require('cors')
const app = express();


const mongoUrl = "mongodb+srv://kaido:animes01@ventiamino.pjmrmom.mongodb.net/?retryWrites=true&w=majority";
mongo.connect(mongoUrl, {
    useNewUrlParser: true}).then(()=> {console.log("Connected to the database");})
    .catch((e)=> {console.log(e);}); 

app.use(express.json())
app.use(cors())




app.listen(5000,() => {console.log("Server started");});

app.post("/post", async (req, res) => {
    console.log(req.body);
    const {email, password} = req.body;

    try {
        if (email == "lucasday@gmail.com"){
            res.send({status: "ok"})
        }
        else{
            res.send({status:"User Not Found"})
        }   
    } catch (error) {
        res.send({status:"Error"})
    }
});

require("./userDetails");

const User = mongo.model("userInfo");

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
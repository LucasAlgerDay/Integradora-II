const mongo = require("mongoose");

const userDetailsSchema = new mongo.Schema(
    {
    username: String,
    email: String,
    password: String,
    raza: String,
    nombreperro: string,
    },
    {
        collection: "userInfo",
    });
mongo.model("userInfo", userDetailsSchema);

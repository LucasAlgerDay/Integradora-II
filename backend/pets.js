const mongo = require("mongoose");

const petSchema = new mongo.Schema({
    userId: Number,
    name: String,
    race: String,
    weight: String
});

mongo.model("pets", petSchema);

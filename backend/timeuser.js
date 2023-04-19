const mongo = require("mongoose");

const timeSchema = new mongo.Schema({
    userId: String,
    hour: String,
});

mongo.model("time", timeSchema);

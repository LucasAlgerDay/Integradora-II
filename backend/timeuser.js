const mongo = require("mongoose");

const timeSchema = new mongo.Schema({
    userId: {
        type: Number,
        required: true,
    },
    hour: {
        type: Number,
        required: true,
    },
    minute: {
        type: Number,
        required: true,
    },
});

mongo.model("time", timeSchema);

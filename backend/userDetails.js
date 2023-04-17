const mongo = require("mongoose");

const userDetailsSchema = new mongo.Schema(
    {
        userId: Number,
        username: String,
        email: String,
        password: String,
        raza: String,
        nombreperro: String,
    },
    {
        collection: "userInfo",
    }
);

userDetailsSchema.pre('save', async function (next) {
    const doc = this;
    const count = await mongo.models["userInfo"].countDocuments();
    doc.userId = count + 1;
    next();
});

mongo.model("userInfo", userDetailsSchema);

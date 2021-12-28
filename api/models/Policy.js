const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    why: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    catagory: {
        type: String,
        required: true,
    },
    catagory: {
        type: Number,
    },
});

const policyModel = mongoose.model("Policy", policySchema);

module.exports = policyModel;

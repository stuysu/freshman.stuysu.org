const mongoose = require("mongoose");

const daySchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    bell_schedule_type: {
        type: String,
        required: true,
    },
});

const dayModel = mongoose.model("Day", daySchema);

module.exports = dayModel;

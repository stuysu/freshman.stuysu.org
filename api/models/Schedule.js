const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    segments: [
        {
            start: String,
            end: String,
            name: String,
        },
    ],
});

const scheduleModel = mongoose.model("Schedule", scheduleSchema);

module.exports = scheduleModel;

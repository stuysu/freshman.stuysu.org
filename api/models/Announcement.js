const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    img_url: {
        type: String,
    },
});

const announcementModel = mongoose.model("Announcement", announcementSchema);

module.exports = announcementModel;

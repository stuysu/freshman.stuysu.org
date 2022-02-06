const router = require("express").Router();
const Policy = require("../models/Policy");
const Announcement = require("../models/Announcement");
const Article = require("../models/Article");
const middlewares = require("../middlewares");

// Temporary hard coded schedule
const schedule = [
    {
        start: "00:00:00",
        end: "7:59:59",
        name: "Before School",
    },
    {
        start: "08:00:00",
        end: "08:39:59",
        name: "Period 1",
    },
    {
        start: "08:41:00",
        end: "08:44:59",
        name: "Periods 1-2 Passing",
    },
    {
        start: "08:45:00",
        end: "09:25:59",
        name: "Period 2",
    },
    {
        start: "09:26:00",
        end: "09:30:59",
        name: "Periods 2-3 Passing",
    },
    {
        start: "09:31:00",
        end: "10:14:59",
        name: "Period 3",
    },
    {
        start: "10:15:00",
        end: "10:19:59",
        name: "Periods 3-4 Passing",
    },
    {
        start: "10:20:00",
        end: "11:00:59",
        name: "Period 4",
    },
    {
        start: "11:01:00",
        end: "11:05:59",
        name: "Periods 4-5 Passing",
    },
    {
        start: "11:06:00",
        end: "11:46:59",
        name: "Period 5",
    },
    {
        start: "11:47:00",
        end: "11:51:59",
        name: "Periods 5-6 Passing",
    },
    {
        start: "11:52:00",
        end: "12:32:59",
        name: "Period 6",
    },
    {
        start: "12:33:00",
        end: "12:37:59",
        name: "Periods 6-7 Passing",
    },
    {
        start: "12:38:00",
        end: "13:18:59",
        name: "Period 7",
    },
    {
        start: "13:19:00",
        end: "13:23:59",
        name: "Periods 7-8 Passing",
    },
    {
        start: "13:24:00",
        end: "14:04:59",
        name: "Period 8",
    },
    {
        start: "14:05:00",
        end: "14:08:59",
        name: "Periods 8-9 Passing",
    },
    {
        start: "14:09:00",
        end: "14:49:59",
        name: "Period 9",
    },
    {
        start: "14:50:00",
        end: "14:53:59",
        name: "Periods 9-10 Passing",
    },
    {
        start: "14:54:00",
        end: "15:34:59",
        name: "Period 10",
    },
    {
        start: "15:35:00",
        end: "23:59:59",
        name: "After School",
    },
];

// Get all the cards, or search by params in request body.

console.log("Loaded api");
router.get("/", (req, res) => {
    res.json("Hello from /api");
});
router.get("/get_policies", async (req, res) => {
    let policies = await Policy.find({});

    res.json(policies);
});
router.get("/get_main", async (req, res) => {
    let announcements = await Announcement.find({});
    let news = await Article.find({});

    res.json({ announcements, news, schedule });
});

router.use(middlewares.notFound);
router.use(middlewares.errorHandler);

module.exports.router = router;

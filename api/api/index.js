const router = require("express").Router();
const Policy = require("../models/Policy");
const Announcement = require("../models/Announcement");
const Article = require("../models/Article");
const Day = require("../models/Day");
const Schedule = require("../models/Schedule");
const middlewares = require("../middlewares");

// Temporary hard coded schedule

// Get all the cards, or search by params in request body.

console.log("Loaded api");
router.get("/", (req, res) => {
    res.json("Hello from /api");
});

function injectLinkProperties(content) {
    return String(content).replace(
        /<a /gi,
        "<a style='color : var(--font-primary)' target='_blank' "
    );
}

async function getBellScheduleForDate(date) {
    return (await Day.findOne({ date }))?.bell_schedule_type || "Regular";
}
router.get("/get_policies", async (req, res) => {
    let policies = await Policy.find({});

    res.json(policies);
});

function get_week(start) {
    const dates = [start];
    let m = new Date(start);
    for (let i = 0; i < 4; i++) {
        m.setDate(m.getDate() + 1); // JS will auto update month and year
        dates.push(
            m.toLocaleDateString("en-US", {
                timeZone: "EST",
            })
        );
    }
    return dates;
}

function get_first_day(start_date) {
    const m = new Date(start_date);

    while (m.getDay() > 1) {
        m.setDate(m.getDate() - 1);
    }
    return m.toLocaleDateString("en-US", {
        timeZone: "EST",
    });
}
router.get("/get_main", async (req, res) => {
    let announcements = await Announcement.find({}).sort({ _id: -1 });
    for (let i = 0; i < announcements.length; i++) {
        let description = announcements[i].description;
        if (description) {
            description = injectLinkProperties(description);
            announcements[i].description = description;
        }
    }

    let news = await Article.find({}).sort({ _id: -1 });
    for (let i = 0; i < news.length; i++) {
        let content = news[i].content;
        if (content) {
            content = injectLinkProperties(content);
            news[i].content = content;
        }
    }

    const today = new Date().toLocaleDateString("en-US", {
        timeZone: "EST",
    });

    const bell_schedule_type = await getBellScheduleForDate(today);

    let schedule = await Schedule.findOne({ name: bell_schedule_type });
    if (!schedule) {
        schedule = await Schedule.findOne({ name: "Regular" });
    }

    const start_date = get_first_day(today);
    const dates = get_week(start_date);
    const weekinfos = [];
    for (let i = 0; i < dates.length; i++) {
        const d = dates[i];
        let info = await Day.findOne({ date: d });
        if (!info) {
            info = {
                bell_schedule_type: "Regular", // More info to be added
                date: d,
            };
        }
        weekinfos.push(info);
    }

    res.json({
        announcements,
        news,
        schedule: schedule.segments,
        bell_schedule_type: bell_schedule_type,
        week: weekinfos,
    });
});

router.use(middlewares.notFound);
router.use(middlewares.errorHandler);

module.exports.router = router;

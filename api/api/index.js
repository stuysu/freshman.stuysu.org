const router = require("express").Router();
const Policy = require("../models/Policy");
const Announcement = require("../models/Announcement");
const Article = require("../models/Article");
const middlewares = require("../middlewares");

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

    res.json({ announcements, news });
});

router.use(middlewares.notFound);
router.use(middlewares.errorHandler);

module.exports.router = router;

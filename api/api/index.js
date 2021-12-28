const router = require("express").Router();
const Policy = require("../models/Policy");
const middlewares = require("../middlewares");

// Get all the cards, or search by params in request body.

console.log("Loaded api");
router.get("/", (req, res) => {
    res.json("Hello from /api");
});
router.get("/get_policies", async (req, res) => {
    const projects = await Policy.find({});

    projects.sort((a, b) => {
        return a.index - b.index;
    });
    res.json(projects);
});

router.use(middlewares.notFound);
router.use(middlewares.errorHandler);

module.exports.router = router;

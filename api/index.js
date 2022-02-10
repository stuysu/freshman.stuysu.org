const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const apiRouter = require("./api/index").router;
const cors = require("cors");

dotenv.config();

// Create express instance
const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

// Import API Routes
app.use("/", apiRouter);

// Connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("Connected to db!");
    }
);

// Export express app
module.exports = app;

// Start standalone server if directly running
if (require.main === module) {
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`API server listening on port ${port}`);
    });
}

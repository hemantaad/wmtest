const express = require("express");

const testRoute = require("./test.route");
const wordRoute = require("./word.route");

const router = express.Router();

router.use("/", testRoute);
router.use("/add-word", wordRoute);

module.exports = router;

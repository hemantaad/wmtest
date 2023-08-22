const express = require("express");
const router = express.Router();
const { testController } = require("../controllers");

router.get("/", testController.displayTest);
router.post("/", testController.submitAnswer);

module.exports = router;

const express = require("express");
const router = express.Router();
const { wordController } = require("../controllers");

router.get("/", wordController.displayAddWordForm);
router.post("/", wordController.addWord);

module.exports = router;

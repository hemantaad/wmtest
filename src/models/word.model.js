const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
  word: String,
  meaning: String,
  set: Number,
});

module.exports = mongoose.model("Word", wordSchema);

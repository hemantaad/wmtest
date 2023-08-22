const Word = require("../models/word.model");

const getWordsBySet = async (set, limit) => {
  return await Word.find({ set }).limit(limit);
};
const getWordById = async (id) => {
  return await Word.findById(id);
};

module.exports = {
  getWordsBySet,
  getWordById,
};

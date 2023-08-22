const Word = require("../models/word.model");

const getWordsBySet = async (set, limit) => {
  return await Word.find({ set }).limit(limit);
};

const getWordById = async (id) => {
  return await Word.findById(id);
};

const addWord = async ({ word, meaning, set }) => {
  try {
    const newWord = new Word({
      word,
      meaning,
      set,
    });
    await newWord.save();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getWordsBySet,
  getWordById,
  addWord,
};

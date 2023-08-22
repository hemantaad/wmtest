const wordService = require("../services/word.service");

const displayAddWordForm = (req, res) => {
  res.render("addWordForm");
};

const addWord = async (req, res) => {
  try {
    const { word, meaning, set } = req.body;
    await wordService.addWord({ word, meaning, set });
    res.redirect("/add-word");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  displayAddWordForm,
  addWord,
};

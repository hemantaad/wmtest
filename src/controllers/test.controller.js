const wordService = require("../services/word.service");

const renderNextQuestionOrScore = async (
  res,
  wordIndex,
  userAnswers,
  score
) => {
  try {
    const wordsData = await wordService.getWordsBySet(1, 10);

    if (wordIndex >= wordsData.length) {
      renderScorePage(res, userAnswers);
    } else {
      const nextWordId = wordsData[wordIndex]._id;
      res.render("index", {
        wordsData,
        wordIndex,
        userAnswers,
        score,
        nextWordId,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const renderScorePage = async (res, userAnswers) => {
  try {
    const wordsData = await wordService.getWordsBySet(1, 10);
    const score = calculateScore(userAnswers, wordsData);
    res.render("score", { score, wordsData, userAnswers });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const calculateScore = (userAnswers, wordsData) => {
  let score = 0;
  userAnswers.forEach((userAnswer, index) => {
    if (
      userAnswer &&
      userAnswer.toLowerCase() === wordsData[index].word.toLowerCase()
    ) {
      score++;
    }
  });
  return score;
};

const displayTest = async (req, res) => {
  renderNextQuestionOrScore(res, 0, []);
};

const submitAnswer = async (req, res) => {
  try {
    const wordIndex = parseInt(req.body.wordIndex);
    const userAnswer = req.body.userAnswer.trim().toLowerCase();
    let userAnswers = req.session.userAnswers || [];

    userAnswers[wordIndex] = userAnswer;

    req.session.userAnswers = userAnswers;
    renderNextQuestionOrScore(res, wordIndex + 1, userAnswers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  displayTest,
  submitAnswer,
};

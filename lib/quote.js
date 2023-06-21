const { randomNumber, randomBoolean, randomChar } = require("./rand");

const word = () => {
  let wd = "O";

  const midLength = randomNumber(0, 3) + 1;
  for (let i = 0; i < midLength; i++) {
    wd += randomBoolean(70) ? "o" : "a";
  }

  wd += randomChar("", "e", "h");

  return wd;
};

const quote = () => {
  let sentence = "";

  const numberOfWords = randomNumber(0, 6) + 1;
  for (let i = 0; i < numberOfWords; i++) {
    sentence += word();

    const isEndOfSentence = i === numberOfWords - 1;
    if (isEndOfSentence) sentence += randomChar(".", "?", "!");
    else
      sentence += `${randomBoolean(60) ? "" : randomChar(",", ".", "?", "!")} `;
  }

  return sentence;
};

module.exports = { word, quote };

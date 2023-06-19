const { randomNumber, randomBoolean } = require("./rand");

const word = () => {
  let wd = "O";

  const midLength = randomNumber(0, 3) + 1;
  for (let i = 0; i < midLength; i++) {
    wd += randomBoolean(70) ? "o" : "a";
  }

  wd += randomBoolean(33) ? "" : randomBoolean(50) ? "e" : "h";

  return wd;
};

module.exports = { word };

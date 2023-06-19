const randomNumber = (min = 0, max = 10) =>
  Math.floor(Math.random() * max + min);

const randomBoolean = (probability = 50) => randomNumber(0, 100) < probability;

module.exports = { randomNumber, randomBoolean };
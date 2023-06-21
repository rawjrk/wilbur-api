const randomNumber = (min, max) => Math.floor(Math.random() * max + min);

const randomBoolean = (probability = 50) => randomNumber(0, 100) < probability;

const randomChar = (...chars) => chars[randomNumber(0, chars.length)];

module.exports = { randomNumber, randomBoolean, randomChar };

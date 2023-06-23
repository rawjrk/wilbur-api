const randomNumber = (max) => Math.floor(Math.random() * max);

const randomBoolean = (probability = 50) => randomNumber(100) < probability;

const randomChar = (...chars) => chars[randomNumber(chars.length)];

module.exports = { randomNumber, randomBoolean, randomChar };

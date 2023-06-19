const repeat = (func, timesRepeated = 100) => {
  for (let i = 0; i < timesRepeated; i++) func();
};

const createTestSequence = (func, { length = 100, args = [] } = {}) => {
  return [...Array(length)].map(() => func(...args));
};

module.exports = { repeat, createTestSequence };

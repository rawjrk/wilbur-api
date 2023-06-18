const { randomNumber, randomBoolean } = require("./rand");

const repeat = (func, timesRepeated = 100) => {
  for (let i = 0; i < timesRepeated; i++) func();
};

const TEST_MIN = 0;
const TEST_MAX = 10;

describe("randomNumber() function", () => {
  const testSequence = [];
  repeat(() => {
    testSequence.push(randomNumber(TEST_MIN, TEST_MAX));
  });

  test("returns numbers", () => {
    testSequence.forEach((num) => {
      expect(typeof num).toBe("number");
    });
  });

  test("returns integers", () => {
    testSequence.forEach((num) => {
      expect(num).toBe(parseInt(num));
    });
  });

  test("always >= min", () => {
    testSequence.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(TEST_MIN);
    });
  });

  test("always < max", () => {
    testSequence.forEach((num) => {
      expect(num).toBeLessThan(TEST_MAX);
    });
  });

  test("hits max(-1) at least 1 time", () => {
    const filtered = testSequence.filter((elem) => elem === TEST_MAX - 1);
    expect(filtered.length).toBeGreaterThan(0);
  });

  test("hits min at least 1 time", () => {
    const filtered = testSequence.filter((elem) => elem === TEST_MIN);
    expect(filtered.length).toBeGreaterThan(0);
  });
});

describe("randomBoolean() function", () => {
  test("returns boolean", () => {
    expect(typeof randomBoolean()).toBe("boolean");
  });

  test("always true when probability is 100", () => {
    repeat(() => {
      expect(randomBoolean(100)).toBe(true);
    });
  });

  test("always false when probability is 0", () => {
    repeat(() => {
      expect(randomBoolean(0)).toBe(false);
    });
  });
});

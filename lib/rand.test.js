const { randomNumber, randomBoolean } = require("./rand");

const repeat = (func, timesRepeated = 100) => {
  for (let i = 0; i < timesRepeated; i++) func();
};

const TEST_MIN = 0;
const TEST_MAX = 10;

describe("randomNumber() function", () => {
  test("returns numbers", () => {
    expect(typeof randomNumber()).toBe("number");
  });

  test("returns integers", () => {
    const result = randomNumber();
    expect(result).toBe(parseInt(result));
  });

  test("always >= min", () => {
    repeat(() => {
      const result = randomNumber(TEST_MIN, TEST_MAX);
      expect(result).toBeGreaterThanOrEqual(TEST_MIN);
    });
  });

  test("always < max", () => {
    repeat(() => {
      const result = randomNumber(TEST_MIN, TEST_MAX);
      expect(result).toBeLessThan(TEST_MAX);
    });
  });

  test("hits max(-1) at least 1/100 times", () => {
    let passed = false;

    for (let i = 0; i < 100; i++) {
      passed = randomNumber(TEST_MIN, TEST_MAX) === TEST_MAX - 1;
      if (passed) break;
    }

    expect(passed).toBe(true);
  });

  test("hits min at least 1/100 times", () => {
    let passed = false;

    for (let i = 0; i < 100; i++) {
      passed = randomNumber(TEST_MIN, TEST_MAX) === TEST_MIN;
      if (passed) break;
    }

    expect(passed).toBe(true);
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

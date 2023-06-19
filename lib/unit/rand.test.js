const { randomNumber, randomBoolean, randomChar } = require("../rand");

const TIMES_REPEATED = 100;
const repeat = (func, timesRepeated = 100) => {
  for (let i = 0; i < timesRepeated; i++) func();
};

const TEST_MIN = 0;
const TEST_MAX = 10;
const TEST_CHARS = ["o", "a", "e"];

describe("randomNumber() function", () => {
  const numberTestSequence = [...Array(TIMES_REPEATED)].map(() =>
    randomNumber(TEST_MIN, TEST_MAX)
  );

  test("returns numbers", () => {
    numberTestSequence.forEach((num) => {
      expect(typeof num).toBe("number");
    });
  });

  test("returns integers", () => {
    numberTestSequence.forEach((num) => {
      expect(num).toBe(parseInt(num));
    });
  });

  test("always >= min", () => {
    numberTestSequence.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(TEST_MIN);
    });
  });

  test("always < max", () => {
    numberTestSequence.forEach((num) => {
      expect(num).toBeLessThan(TEST_MAX);
    });
  });

  test("hits max(-1) at least 1 time", () => {
    const filtered = numberTestSequence.filter((elem) => elem === TEST_MAX - 1);
    expect(filtered.length).toBeGreaterThan(0);
  });

  test("hits min at least 1 time", () => {
    const filtered = numberTestSequence.filter((elem) => elem === TEST_MIN);
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

describe("randomChar() function", () => {
  const charTestSequence = [...Array(TIMES_REPEATED)].map(() =>
    randomChar(...TEST_CHARS)
  );

  test("test arguments are all strings", () => {
    TEST_CHARS.forEach((char) => {
      expect(typeof char).toBe("string");
    });
  });

  test("returns string", () => {
    charTestSequence.forEach((char) => {
      expect(typeof char).toBe("string");
    });
  });

  test("returns characters from the given array only", () => {
    charTestSequence.forEach((char) => {
      expect(TEST_CHARS.includes(char)).toBe(true);
    });
  });
});

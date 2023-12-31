const { randomNumber, randomBoolean, randomChar } = require("../../lib/rand");

const TEST_MIN = 0;
const TEST_MAX = 10;
const TEST_CHARS = ["o", "a", "e"];

const numberOptions = { args: [TEST_MAX] };
const charOptions = { args: TEST_CHARS };

const numberTestSequence = createTestSequence(randomNumber, numberOptions);
const booleanTestSequence = createTestSequence(randomBoolean);
const charTestSequence = createTestSequence(randomChar, charOptions);

describe("randomNumber() function", () => {
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
    booleanTestSequence.forEach((b) => {
      expect(typeof b).toBe("boolean");
    });
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

  test("returns true at least 1 time", () => {
    const filtered = booleanTestSequence.filter((elem) => elem === true);
    expect(filtered.length).toBeGreaterThan(0);
  });

  test("returns false at least 1 time", () => {
    const filtered = booleanTestSequence.filter((elem) => elem === false);
    expect(filtered.length).toBeGreaterThan(0);
  });
});

describe("randomChar() function", () => {
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

  test("returns each possible character", () => {
    TEST_CHARS.forEach((testChar) => {
      const filtered = charTestSequence.filter((elem) => elem === testChar);
      expect(filtered.length).toBeGreaterThan(0);
    });
  });
});

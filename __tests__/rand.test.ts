import { randomNumber, randomBoolean, randomChar } from "@/lib/rand";
import { repeat, createTestSequence } from "@/utils/testUtils";

const TEST_MIN = 0;
const TEST_MAX = 10;
const TEST_CHARS: string[] = ["o", "a", "e"];

const numberOptions = { args: [TEST_MAX] };
const charOptions = { args: TEST_CHARS };

const numberTestSequence: number[] = createTestSequence(
  randomNumber,
  numberOptions
);
const booleanTestSequence: boolean[] = createTestSequence(randomBoolean);
const charTestSequence: string[] = createTestSequence(randomChar, charOptions);

describe("randomNumber() function", () => {
  test("returns integers", () => {
    numberTestSequence.forEach((num) => {
      expect(num).toBe(Math.trunc(num));
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

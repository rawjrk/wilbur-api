const { word, quote } = require("../../lib/quote");

const WORD_LENGTH = [2, 3, 4, 5];
const QUOTE_LENGTH = [1, 2, 3, 4, 5, 6];

const wordTestSequence = createTestSequence(word);
const quoteTestSequence = createTestSequence(quote);

describe("word() function", () => {
  test("returns string", () => {
    wordTestSequence.forEach((wd) => {
      expect(typeof wd).toBe("string");
    });
  });

  test("word length is 2 and 5 or in-between", () => {
    wordTestSequence.forEach((wd) => {
      expect(wd.length).toBeGreaterThanOrEqual(2);
      expect(wd.length).toBeLessThanOrEqual(5);
    });
  });

  test("matches pattern", () => {
    wordTestSequence.forEach((wd) => {
      // beginning: always "O"
      // mid part: "o"/"a" x1-3
      // end char: "e"/"h" or none
      expect(wd).toMatch(/^O(o|a){1,3}(e|h)?$/);
    });
  });

  test("generates words of each possible length", () => {
    WORD_LENGTH.forEach((testLength) => {
      const filtered = wordTestSequence.filter(
        (elem) => elem.length === testLength
      );
      expect(filtered.length).toBeGreaterThan(0);
    });
  });
});

describe("quote() function", () => {
  test("returns string", () => {
    quoteTestSequence.forEach((qt) => {
      expect(typeof qt).toBe("string");
    });
  });

  test("matches pattern", () => {
    quoteTestSequence.forEach((qt) => {
      const word = "O(o|a){1,3}(e|h)?";
      const separator = "(,|\\.|\\?|!)?";
      const end = "(\\.|\\?|!)";
      const pattern = new RegExp(`^(${word}${separator} ){0,5}${word}${end}$`);

      expect(qt).toMatch(pattern);
    });
  });

  test("generates quotes of each possible length", () => {
    QUOTE_LENGTH.forEach((testLength) => {
      const filtered = quoteTestSequence.filter(
        (elem) => elem.split(" ").length === testLength
      );
      expect(filtered.length).toBeGreaterThan(0);
    });
  });
});

const { word, quote } = require("../quote");

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
      const matcher = wd.match(/^O(o|a){1,3}(e|h)?$/);
      expect(matcher).not.toBeNull();
    });
  });

  test("returns words of each possible length", () => {
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
    quoteTestSequence.forEach((ph) => {
      expect(typeof ph).toBe("string");
    });
  });

  test("matches pattern", () => {
    quoteTestSequence.forEach((ph) => {
      const word = "O(o|a){1,3}(e|h)?";
      const separator = "(,|\\.|\\?|!)?";
      const end = "(\\.|\\?|!)";
      const pattern = new RegExp(`^(${word}${separator} ){0,5}${word}${end}$`);

      const matcher = ph.match(pattern);
      expect(matcher).not.toBeNull();
    });
  });

  test("returns quotes of each possible length", () => {
    QUOTE_LENGTH.forEach((testLength) => {
      const filtered = quoteTestSequence.filter(
        (elem) => elem.split(" ").length === testLength
      );
      expect(filtered.length).toBeGreaterThan(0);
    });
  });
});

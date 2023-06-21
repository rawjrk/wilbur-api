const { word, quote } = require("../quote");

const wordTestSequence = createTestSequence(word);
const phraseTestSequence = createTestSequence(quote);

describe("word() function", () => {
  test("returns string", () => {
    wordTestSequence.forEach((wd) => {
      expect(typeof wd).toBe("string");
    });
  });

  test("word length is between 2 and 5", () => {
    wordTestSequence.forEach((wd) => {
      expect(wd.length).toBeGreaterThanOrEqual(2);
      expect(wd.length).toBeLessThanOrEqual(5);
    });
  });

  test(`1st char is always "O"`, () => {
    wordTestSequence.forEach((wd) => {
      expect(wd[0]).toBe("O");
    });
  });

  test(`mid word is 1-3 "o"/"a"`, () => {
    wordTestSequence.forEach((wd) => {
      const mid = wd.slice(1);
      const matcher = mid.match(/^(o|a){1,3}/);
      expect(matcher).not.toBeNull();
    });
  });

  test(`last char is "e"/"h" or none`, () => {
    wordTestSequence.forEach((wd) => {
      const beginning = wd.match(/^O(o|a){1,3}/)[0];
      const lastChar = wd.slice(beginning.length);
      /* ^^^ skipping 'O' and mid */

      const matcher = lastChar.match(/^(e|h)?$/);
      expect(matcher).not.toBeNull();
    });
  });
});

describe("quote() function", () => {
  test("returns string", () => {
    phraseTestSequence.forEach((ph) => {
      expect(typeof ph).toBe("string");
    });
  });

  test("matches pattern", () => {
    phraseTestSequence.forEach((ph) => {
      const word = "O(o|a){1,3}(e|h)?";
      const separator = "(,|\\.|\\?|!)?";
      const end = "(\\.|\\?|!)";
      const pattern = new RegExp(`^(${word}${separator} ){0,5}${word}${end}$`);

      const matcher = ph.match(pattern);
      expect(matcher).not.toBeNull();
    });
  });
});
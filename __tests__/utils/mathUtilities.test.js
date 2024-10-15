const { isCorrectAnswer, getQuestion, } = require("../../utils/mathUtilities");

describe("Tests for getQuestion", () => {
    // test for addition
    test("returns a string for addition question", () => {
        expect(getQuestion("addition")).toMatch(/(\d+)(\s\+)(\d+)/);
      });

    // test for subtraction
    test("returns a string for subtraction question", () => {
        expect(getQuestion("subtraction")).toMatch(/(\d+)(\s-)(\d+)/);
      });

    // test for multiplication
    test("returns a string for multiplication question", () => {
        expect(getQuestion("multiplication")).toMatch(/(\d+)(\s\*)(\d+)/);
      });

    // test for division
    test("returns a string for division question", () => {
        expect(getQuestion("division")).toMatch(/(\d+)(\s\/)(\d+)/);
      });

    expect(getQuestion("addition")).toMatch(/(\d+)(\s\+)(\d+)/);
    expect(getQuestion("subtraction")).toMatch(/(\d+)(\s-)(\d+)/);
    expect(getQuestion("multiplication")).toMatch(/(\d+)(\s\*)(\d+)/);
    expect(getQuestion("division")).toMatch(/(\d+)(\s\/)(\d+)/);
});

describe("Tests for isCorrectAnswer", () => {
    // test for correct addition
    test("returns true for correct addition question", () => {
        expect(isCorrectAnswer("10 + 4", 14)).toBe(true);
      });

      // test for incorrect addition
      test("returns false for incorrect addition question", () => {
        expect(isCorrectAnswer("10 + 4", 15)).toBe(false);
      });
      
      // test for correct subtraction
      test("returns true for correct subtraction question", () => {
        expect(isCorrectAnswer("5 - 3", 2)).toBe(true);
      });

      // test for incorrect subtraction
      test("returns false for incorrect subtraction question", () => {
        expect(isCorrectAnswer("5 - 3", 3)).toBe(false);
      });
      
      // test for correct multiplication
      test("returns true for correct multiplication question", () => {
        expect(isCorrectAnswer("5 * 2", 10)).toBe(true);
      });

      // test for incorrect multiplication
      test("returns false for incorrect multiplication question", () => {
        expect(isCorrectAnswer("5 * 2", 11)).toBe(false);
      })
      
      // test for correct division
      test("returns true for correct division question", () => {
        expect(isCorrectAnswer("10 / 5", 2)).toBe(true);
      });

      // test for incorrect division
      test("returns false for incorrect division question", () => {
        expect(isCorrectAnswer("10 / 5", 3)).toBe(false);
      });
    });


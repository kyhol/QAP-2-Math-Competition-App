const { isCorrectAnswer, getQuestion } = require("../../utils/mathUtilities");

describe("Math Utilities", () => {
  describe("getQuestion", () => {
    test("should properly generate a question", () => {
      const result = getQuestion("easy");

      expect(result).toHaveProperty("question");
      expect(result).toHaveProperty("answer");
      expect(typeof result.question).toBe("string");
      expect(typeof result.answer).toBe("number");

      // Verify the question format (two numbers and an operator)
      const questionParts = result.question.split(" ");
      expect(questionParts).toHaveLength(3);
      expect(Number.isInteger(parseInt(questionParts[0]))).toBe(true);
      expect(["+", "-", "*", "/"].includes(questionParts[1])).toBe(true);
      expect(Number.isInteger(parseInt(questionParts[2]))).toBe(true);
    });
  });

  describe("isCorrectAnswer", () => {
    test("should detect a correct answer", () => {
      const question = "5 + 3";
      const correctAnswer = "8";

      expect(isCorrectAnswer(question, correctAnswer)).toBe(true);
    });

    test("should detect an incorrect answer", () => {
      const question = "10 - 4";
      const incorrectAnswer = "7";

      expect(isCorrectAnswer(question, incorrectAnswer)).toBe(false);
    });
  });
});

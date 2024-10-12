// mathUtilities.js

/**
 * Gets a random math question based on difficulty
 *
 * @param {string} difficulty - The difficulty level ('easy', 'medium', 'hard')
 * @returns {Object} The random math question and answer
 */
function getQuestion(difficulty = "easy") {
  const operations = ["+", "-", "*", "/"];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  let num1, num2, answer;

  // Adjust number ranges based on difficulty
  let range;
  switch (difficulty) {
    case "easy":
      range = 10;
      break;
    case "medium":
      range = 50;
      break;
    case "hard":
      range = 100;
      break;
    default:
      range = 10;
  }

  // Generate numbers based on operation and difficulty
  switch (operation) {
    case "+":
    case "-":
      num1 = getRandomInt(1, range);
      num2 = getRandomInt(1, range);
      break;
    case "*":
      num1 = getRandomInt(1, Math.min(10, range)); // Limit multiplication range
      num2 = getRandomInt(1, Math.min(10, range));
      break;
    case "/":
      num2 = getRandomInt(1, Math.min(10, range)); // Limit division range
      answer = getRandomInt(1, Math.min(10, range));
      num1 = num2 * answer; // Ensure whole number division
      break;
  }

  // Calculate answer
  switch (operation) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      // Ensure positive result
      if (num1 < num2) [num1, num2] = [num2, num1];
      answer = num1 - num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
    // For division, answer is already calculated
  }

  return {
    question: `${num1} ${operation} ${num2}`,
    answer: answer,
  };
}

/**
 * Parses the provided question and gets whether or not the provided answer is correct
 *
 * @param {*} question The question being answered
 * @param {*} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */
function isCorrectAnswer(question, answer) {
  const parts = question.split(" ");
  const num1 = parseInt(parts[0]);
  const operation = parts[1];
  const num2 = parseInt(parts[2]);
  const userAnswer = parseInt(answer);

  let correctAnswer;
  switch (operation) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "*":
      correctAnswer = num1 * num2;
      break;
    case "/":
      correctAnswer = num1 / num2;
      break;
    default:
      return false; // Invalid operation
  }

  return userAnswer === correctAnswer;
}

// Helper function to generate random integer
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  getQuestion,
  isCorrectAnswer,
};

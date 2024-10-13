// Author: Kyle Hollett
// Date: 2024-10-12

// index.js

const express = require("express");
const app = express();
const port = 3000;
const { getQuestion, isCorrectAnswer } = require("./utils/mathUtilities");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// fancy in-memory data storage
let leaderBoard = [];
let currentStreak = 0;
let lastQuestion = null;
let currentDifficulty = "easy"; // Default difficulty

// Home sweet home
app.get("/", (req, res) => {
  res.render("index", { streak: currentStreak, leaderBoard });
});

// Quiz time! Now with added spice (difficulty levels)
app.get("/quiz", (req, res) => {
  // Let's see what difficulty the user is brave enough to try
  currentDifficulty = req.query.difficulty || "easy";
  lastQuestion = getQuestion(currentDifficulty);
  res.render("quiz", {
    question: lastQuestion.question,
    difficulty: currentDifficulty,
    streak: currentStreak,
  });
});

// The moment of truth - did they get it right?
app.post("/quiz", (req, res) => {
  const { answer } = req.body;

  if (!lastQuestion) {
    // If there's no last question, redirect to the quiz page to get a new question
    return res.redirect("/quiz");
  }

  if (isCorrectAnswer(lastQuestion.question, answer)) {
    // They've done it! Another one bites the dust
    currentStreak++;
    res.render("completion", {
      correct: true,
      streak: currentStreak,
      difficulty: currentDifficulty,
      message: `Boom! That's ${currentStreak} in a row on ${currentDifficulty} mode. Call the fire department, you are on FIRE!`,
    });
  } else {
    // Uh-oh, streak breaker. Time to immortalize their score
    if (currentStreak > 0) {
      leaderBoard.push({
        streak: currentStreak,
        difficulty: currentDifficulty,
        date: new Date().toISOString(),
        questionsAnswered: currentStreak,
      });
      // Keep the leaderboard tidy - top 10 only
      leaderBoard.sort((a, b) => b.streak - a.streak);
      leaderBoard = leaderBoard.slice(0, 10);
    }

    res.render("completion", {
      correct: false,
      streak: currentStreak,
      difficulty: currentDifficulty,
      message: `Aw, I'm sorry, the doctor called and you've been diagnosed as "Bad at Math" My condolences! The answer was ${lastQuestion.answer}. You made it to ${currentStreak} on ${currentDifficulty} mode. Not too shabby buckeroo!`,
    });
    currentStreak = 0; // Back to square one
  }

  lastQuestion = null; // Clear the decks for the next question
});

// Show off the big shots on the leaderboard
app.get("/leaderboard", (req, res) => {
  res.render("leaderboard", { leaderBoard });
});

// Let's get this party started!
app.listen(port, () => {
  console.log(
    `Alright, math wizards! Your challenge awaits at http://localhost:${port}`
  );
});

const express = require("express");
const app = express();
const port = 3000;

//data storage
let leaderBoard = [];

//method/function

function generateQuestion() {
  const operators = ["+", "-", "*", "/"];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let num1;
  let num2;
  let answer;

  switch (operator) {
    case "+":
      num1 = Math.floor(Math.random() * 100);
      num2 = Math.floor(Math.random() * 100);
      answer = num1 + num2;
      break;
    case "-":
      num1 = Math.floor(Math.random() * 100);
      num2 = Math.floor(Math.random() * 100);
      answer = num1 - num2;
      break;
    case "*":
      num1 = Math.floor(Math.random() * 100);
      num2 = Math.floor(Math.random() * 100);
      answer = num1 * num2;
      break;
    case "/":
      num1 = Math.floor(Math.random() * 100);
      num2 = Math.floor(Math.random() * 100);
      answer = num1 / num2;
      break;
  }
  return {
    question: `${num1} ${operation} ${num2}`,
    answer: answer,
  };
}

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(express.static("public")); // To serve static files (e.g., CSS)

//Some routes required for full functionality are missing here. Only get routes should be required
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/quiz", (req, res) => {
  res.render("quiz");
});

//Handles quiz submissions.
app.post("/quiz", (req, res) => {
  const { answer } = req.body;
  console.log(`Answer: ${answer}`);

  //answer will contain the value the user entered on the quiz page
  //Logic must be added here to check if the answer is correct, then track the streak and redirect properly
  //By default we'll just redirect to the homepage again.
  res.redirect("/");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
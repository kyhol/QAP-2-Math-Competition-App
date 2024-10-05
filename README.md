# Math Competition App

This is the starting point for the **Math Competition App** assignment. The goal of this project is to create a simple web application where users can practice solving math questions, track their streak of correct answers, and view leaderboards.

## Features

- **Home Page**:
  - Start a new quiz or view the leaderboards.
  - Display the user's last recorded streak or a message indicating no streak exists.
- **Quiz Page**:

  - Display math questions for the user to answer.
  - Track the user's streak of correct answers.

- **Quiz Completion Page**:

  - Display the current streak.
  - Allow the user to start a new quiz or return to the home page.

- **Leaderboards Page**:
  - Display the top 10 streaks, including the number of correct answers and when the streak was obtained.

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org) installed on your machine.
- A code editor, such as [VSCode](https://code.visualstudio.com/).

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/menglishca/math-competition-base.git
   ```
2. **Navigate to the project folder:**

   ```bash
   cd math-competition-base
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the app:**

   ```bash
   npm start
   ```

   This will start the server at `http://localhost:3000/`.

5. **Run tests:**
   ```bash
   npm test
   ```
   This will run the unit tests for the application.

## Development Guidelines

1. **Homepage**:
   - The homepage links should bring you to a new quiz or the leaderboards.
   - Show the last recorded streak or a message indicating there was no streak.
2. **Quiz Functionality**:
   - Implement logic to present math questions.
   - Check the correctness of user answers and update the streak.
3. **Leaderboards**:

   - Track and display the top 10 streaks in memory (no database required).

4. **Testing**:
   - Write unit tests for:
     - Generating a new math question.
     - Checking if the user's answer is correct or incorrect.
   - Make sure tests pass before submitting the assignment.

## Submission Guidelines

- Submit a link to your GitHub repository through the Teams assignment.
- Ensure all required functionality is implemented and working.
- The project should run with `npm start` and all tests should pass with `npm test`.

## Notes

- Extra npm packages are allowed (except for templating engines like React).
- All pages should use **.ejs templates**.
- No persistent data storage is required; all data can be stored in memory.

// quiz.js
// Simple JavaScript quiz game that runs entirely in the browser console.
// Instructions:
// 1. Open your browser's console.
// 2. Paste this entire code into the console and press Enter.
// 3. If it does not start automatically, type runQuiz() and press Enter.

"use strict";

// 1. Quiz Questions Array
// Each question is an object with a 'question' and an 'answer' property.
const quizQuestions = [
  {
    question: "What is the capital of France?",
    answer: "paris",
  },
  {
    question: "What is 2 + 2?",
    answer: "4",
  },
  {
    question: "Which language is used to style web pages (HTML, CSS, or JavaScript)?",
    answer: "css",
  },
  {
    question: "What keyword is used to declare a variable in JavaScript (var, let, or const)?",
    answer: ["let", "const", "var"],
  },
  {
    question: "In JavaScript, what method is used to log messages to the console?",
    answer: "console.log()",
  },
  {
    question: "Who founded Java?",
    answer: "james gosling",
  },
  {
    question: "What is the capital of Germany?",
    answer: "berlin",
  },
  {
    question: "What is the capital of Italy?",
    answer: "rome",
  },
];

// 2. Function to Run the Quiz
function runQuiz() {
  // 3. Score Initialization
  let score = 0;

  // 4. Loop Through Questions
  for (let i = 0; i < quizQuestions.length; i++) 
    {
        const currentQuestion = quizQuestions[i];

        // 5. Prompt for User Input
        let userAnswer = prompt(`Question ${i + 1} of ${quizQuestions.length}:\n${currentQuestion.question}`);

        // Handle case where user cancels the prompt
        if (userAnswer === null) {
        alert("You cancelled the quiz. The quiz will now end.");
        break;
        }

        // 6. Normalize the Input
        userAnswer = userAnswer.toLowerCase().trim();

        let isCorrect = false;
        if (Array.isArray(currentQuestion.answer)) 
        {
            const normalizedAnswer = currentQuestion.answer.map(answer => answer.toLowerCase().trim());
            if (normalizedAnswer.includes(userAnswer)) {
            isCorrect = true;
            }
        }
        else 
        {
            if(userAnswer === currentQuestion.answer.toLowerCase().trim()) {
            isCorrect = true;
            } 
        }
        if (isCorrect) {
            score++;
            alert("Correct! ✅");
        }
        else {
            alert(`Incorrect. The correct answer is: "${currentQuestion.answer}".`);

        }
  }

  // 9. Display the Final Score
alert(`Quiz finished!\nYour final score is ${score} out of ${quizQuestions.length}.`);
}

// 10. Automatically run the quiz when the code is loaded.
// Comment out the line below if you prefer to start manually by calling runQuiz() in the console.
runQuiz();
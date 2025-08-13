const puzzles = [
  {
    question: "What comes next in the sequence: 2, 4, 8, 16, ?",
    answer: "32",
    hint: "Each number doubles."
  },
  {
    question: "Find the odd one out: Apple, Banana, Carrot, Mango",
    answer: "Carrot",
    hint: "One is a vegetable."
  },
  {
    question: "If ALLIGATOR is to REPTILE, then SPARROW is to?",
    answer: "Bird",
    hint: "Think of animal classifications."
  }
];

const todayPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
document.getElementById("puzzle").textContent = todayPuzzle.question;

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const correct = todayPuzzle.answer.toLowerCase();
  const feedback = document.getElementById("feedback");

  if (userAnswer === correct) {
    feedback.textContent = "✅ Correct!";
  } else {
    feedback.textContent = "❌ Try again!";
  }
}

function showHint() {
  document.getElementById("hint").textContent = todayPuzzle.hint;
}

const questions = [
  {
    category: "Career",
    question: "What is your primary goal?",
    choices: ["one", "two", "three"],
    answer: "one",
  },
  {
    category: "Algorithm",
    question: "How do you make logic?",
    choices: ["writting", "coding", "brain-storming"],
    answer: "brain-storming",
  },
  {
    category: "English",
    question: "What is your current level in English?",
    choices: ["A1", "B1", "B2"],
    answer: "B2",
  },
  {
    category: "Ploblem-solving",
    question: "What is the time-complexity of Merge sort?",
    choices: ["O(1)", "nLogN", "O(n)"],
    answer: "nLogN",
  },
  {
    category: "Technology",
    question: "How do you learn a stack?",
    choices: ["documentation", "video", "both"],
    answer: "both",
  },
]

// functions such as getRandomQuestion, getRandomComoputerChoice, getResults.

function getRandomQuestion(question){
  const randomIndex = Math.floor(Math.random() * question.length);
  const getQuestion = question[randomIndex];
  return getQuestion;
}

function getRandomComputerChoice(choices){
  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

function getResults(question, computerChoice){
  if(computerChoice === question.answer){
    return "The computer's choice is correct!";
  }
  return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
}
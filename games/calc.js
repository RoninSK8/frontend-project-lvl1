const rules = 'What is the result of the expression?';
const generateTaskAndCorrectAnswer = () => {
  const result = [];
  const randomNumber1 = Math.floor(Math.random() * (100 - 1)) + 1;
  const randomNumber2 = Math.floor(Math.random() * (100 - 1)) + 1;
  const operators = '+-*';
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const task = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  result.push(task);
  let correctAnswer;
  switch (randomOperator) {
    case '+':
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case '-':
      correctAnswer = randomNumber1 - randomNumber2;
      break;
    default:
      correctAnswer = randomNumber1 * randomNumber2;
      break;
  }
  result.push(String(correctAnswer));
  return result;
};
export { rules, generateTaskAndCorrectAnswer };

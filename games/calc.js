const rules = 'What is the result of the expression?';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generateTaskAndCorrectAnswer = () => {
  const result = [];
  const randomNumber1 = generateNumber(1, 100);
  const randomNumber2 = generateNumber(1, 100);
  const operators = '+-*';
  const randomOperator = operators[generateNumber(0, operators.length)];
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
    case '*':
      correctAnswer = randomNumber1 * randomNumber2;
      break;
    default:
      throw new Error(`Unknown operator: ${randomOperator}`);
  }
  result.push(String(correctAnswer));
  return result;
};
export { rules, generateTaskAndCorrectAnswer };

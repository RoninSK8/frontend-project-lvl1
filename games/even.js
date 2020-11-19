import generateNumber from '../src/utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const generateTaskAndCorrectAnswer = () => {
  const result = [];
  const task = generateNumber(1, 100);
  result.push(task);
  const correctAnswer = isEven(task) ? 'yes' : 'no';
  result.push(correctAnswer);
  return result;
};

export { rules, generateTaskAndCorrectAnswer };

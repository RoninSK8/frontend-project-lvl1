import generateNumber from '../src/utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const generateTaskAndCorrectAnswer = () => {
  const task = generateNumber(1, 100);
  const correctAnswer = isEven(task) ? 'yes' : 'no';
  return [task, correctAnswer];
};

export { rules, generateTaskAndCorrectAnswer };

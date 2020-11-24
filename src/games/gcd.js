import play from '../index.js';
import generateNumber from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
};

const generateTaskAndCorrectAnswer = () => {
  const result = [];
  const randomNumber1 = generateNumber(1, 100);
  const randomNumber2 = generateNumber(1, 100);
  const task = `${randomNumber1} ${randomNumber2}`;
  result.push(task);
  const correctAnswer = greatestCommonDivisor(randomNumber1, randomNumber2);
  result.push(String(correctAnswer));
  return result;
};

export default () => play(rule, generateTaskAndCorrectAnswer);

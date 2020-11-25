import play from '../index.js';
import generateNumber from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateTaskAndCorrectAnswer = () => {
  const result = [];
  const task = generateNumber(1, 100);
  result.push(task);
  const correctAnswer = isPrime(task) ? 'yes' : 'no';
  result.push(String(correctAnswer));
  return result;
};

export default () => play(rule, generateTaskAndCorrectAnswer);

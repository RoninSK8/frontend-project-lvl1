const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num === 2 || num === 3) {
    return true;
  }
  for (let i = 2; i <= num / 2; i += 1) {
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

export { rules, generateTaskAndCorrectAnswer };

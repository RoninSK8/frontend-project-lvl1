const rules = 'Find the greatest common divisor of given numbers.';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

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

export { rules, generateTaskAndCorrectAnswer };

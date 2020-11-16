const rules = 'Find the greatest common divisor of given numbers.';
const generateTaskAndCorrectAnswer = () => {
  const result = [];
  const generateNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const randomNumber1 = generateNumber(1, 100);
  const randomNumber2 = generateNumber(1, 100);
  const task = `${randomNumber1} ${randomNumber2}`;
  result.push(task);
  const greatestCommonDivisor = (a, b) => {
    if (b === 0) {
      return a;
    }
    return greatestCommonDivisor(b, a % b);
  };
  const correctAnswer = greatestCommonDivisor(randomNumber1, randomNumber2);
  result.push(String(correctAnswer));
  return result;
};

export { rules, generateTaskAndCorrectAnswer };

const rules = 'Find the greatest common divisor of given numbers.';
const generateTaskAndCorrectAnswer = () => {
  const result = [];
  const randomNumber1 = Math.floor(Math.random() * (100 - 1)) + 1;
  const randomNumber2 = Math.floor(Math.random() * (100 - 1)) + 1;
  const task = `${randomNumber1} ${randomNumber2}`;
  result.push(task);
  const greatestCommonDivisor = (a, b) => {
    if (b === 0) {
      return a;
    }
    return greatestCommonDivisor(b, a % b);
  };
  result.push(String(greatestCommonDivisor(randomNumber1, randomNumber2)));
  return result;
};

export { rules, generateTaskAndCorrectAnswer };

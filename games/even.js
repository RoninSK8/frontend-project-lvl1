const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateTaskAndCorrectAnswer = () => {
  const result = [];
  const generateNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const task = generateNumber(1, 100);
  result.push(task);
  const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
  const correctAnswer = isEven(task);
  result.push(correctAnswer);
  return result;
};

export { rules, generateTaskAndCorrectAnswer };

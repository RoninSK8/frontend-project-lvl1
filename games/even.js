const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateTaskAndCorrectAnswer = () => {
  const result = [];
  const generateNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const task = generateNumber(1, 100);
  result.push(task);
  const isEven = (number) => number % 2 === 0;
  const correctAnswer = isEven(task) ? 'yes' : 'no';
  result.push(correctAnswer);
  return result;
};

export { rules, generateTaskAndCorrectAnswer };

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateTaskAndCorrectAnswer = () => {
  const result = [];
  const task = Math.floor(Math.random() * (100 - 1)) + 1;
  result.push(task);
  const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
  const correctAnswer = isEven(task);
  result.push(correctAnswer);
  return result;
};

export { rules, generateTaskAndCorrectAnswer };

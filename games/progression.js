const rules = 'What number is missing in the progression?';
const generateTaskAndCorrectAnswer = () => {
  const result = [];
  const numberOfItems = Math.floor(Math.random() * (10 - 5)) + 5;
  const startingItem = Math.floor(Math.random() * (50 - 1)) + 1;
  const sizeOfStep = Math.floor(Math.random() * (10 - 1)) + 1;
  const indexOfSkippedItem = Math.floor(Math.random() * numberOfItems);
  const resultArray = [];
  for (let i = 1; i <= numberOfItems; i += 1) {
    resultArray.push(startingItem + (sizeOfStep * i));
  }
  const correctAnswer = resultArray[indexOfSkippedItem];
  resultArray[indexOfSkippedItem] = '..';
  const task = `${resultArray.join(' ')}`;
  result.push(task);
  result.push(String(correctAnswer));
  return result;
};

export { rules, generateTaskAndCorrectAnswer };

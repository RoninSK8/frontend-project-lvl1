const rules = 'What number is missing in the progression?';
const generateTaskAndCorrectAnswer = () => {
  const result = [];
  const generateNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const numberOfItems = generateNumber(5, 10);
  const startingItem = generateNumber(1, 50);
  const sizeOfStep = generateNumber(1, 10);
  const indexOfSkippedItem = generateNumber(0, numberOfItems);
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

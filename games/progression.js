import generateNumber from '../src/utils.js';

const rules = 'What number is missing in the progression?';

const generateTaskAndCorrectAnswer = () => {
  const result = [];
  const numberOfItems = generateNumber(5, 10);
  const startingItem = generateNumber(1, 50);
  const sizeOfStep = generateNumber(1, 10);
  const indexOfSkippedItem = generateNumber(0, numberOfItems);
  const progression = [];
  for (let i = 1; i <= numberOfItems; i += 1) {
    progression.push(startingItem + (sizeOfStep * i));
  }
  const correctAnswer = progression[indexOfSkippedItem];
  progression[indexOfSkippedItem] = '..';
  const task = progression.join(' ');
  result.push(task);
  result.push(String(correctAnswer));
  return result;
};

export { rules, generateTaskAndCorrectAnswer };

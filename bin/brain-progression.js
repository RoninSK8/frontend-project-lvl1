#!/usr/bin/env node
import promptly from 'promptly';

async function isMissingNumber() {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let counter = 0;
  while (counter < 3) {
    const numberOfItems = Math.floor(Math.random() * (10 - 5)) + 5;
    const startingItem = Math.floor(Math.random() * (50 - 1)) + 1;
    const sizeOfStep = Math.floor(Math.random() * (10 - 1)) + 1;
    const indexOfSkippedItem = Math.floor(Math.random() * numberOfItems);
    const resultArray = [];
    for (let i = 1; i <= numberOfItems; i += 1) {
      resultArray.push(startingItem + (sizeOfStep * i));
    }
    const rightAnswer = resultArray[indexOfSkippedItem];
    resultArray[indexOfSkippedItem] = '..';
    console.log(`Question: ${resultArray.join(' ')}`);
    // eslint-disable-next-line no-await-in-loop
    const answer = await promptly.prompt('Your answer: ');
    if (rightAnswer === +answer) {
      console.log('Correct!');
      counter += 1;
    } else {
      counter = 0;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${name}!`);
    }
    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}
isMissingNumber();

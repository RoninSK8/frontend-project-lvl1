#!/usr/bin/env node
import promptly from 'promptly';
import askName from '../src/cli.js';

async function isEvenGame() {
  const isEven = (num) => {
    return num % 2 === 0 ? 'yes' : 'no';
  };
  await askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  while (counter < 3) {
    let randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    console.log(`Question: ${randomNumber}`);
    const answer = await promptly.prompt('Your answer: ');
    if (isEven(randomNumber) === answer) {
      console.log('Correct!');
      counter += 1;
    }
    else {
      counter = 0;
      console.log(`${answer} is wrong answer ;(. Correct answer was '${isEven(randomNumber)}'.
              Let's try again, Bill!`);
    }
  }
  if (counter === 3) {
    console.log('Congratulations, Sam!');
  }
}

isEvenGame();

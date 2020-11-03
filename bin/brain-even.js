#!/usr/bin/env node
import promptly from 'promptly';

async function isEvenGame() {
  const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  while (counter < 3) {
    const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    console.log(`Question: ${randomNumber}`);
    // eslint-disable-next-line no-await-in-loop
    const answer = await promptly.prompt('Your answer: ');
    if (isEven(randomNumber) === answer) {
      console.log('Correct!');
      counter += 1;
    } else {
      counter = 0;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(randomNumber)}'. \nLet's try again, ${name}!`);
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

isEvenGame();

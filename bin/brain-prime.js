#!/usr/bin/env node
import promptly from 'promptly';

async function isPrimeGame() {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let counter = 0;
  while (counter < 3) {
    const isPrime = (num) => {
      if (num <= 1) {
        return 'no';
      }
      if (num === 2 || num === 3) {
        return 'yes';
      }
      for (let i = 2; i <= num / 2; i += 1) {
        if (num % i === 0) {
          return 'no';
        }
      }
      return 'yes';
    };
    const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    console.log(`Question: ${randomNumber}`);
    // eslint-disable-next-line no-await-in-loop
    const answer = await promptly.prompt('Your answer: ');
    if (isPrime(randomNumber) === answer) {
      console.log('Correct!');
      counter += 1;
    } else {
      counter = 0;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime(randomNumber)}'. \nLet's try again, ${name}!`);
    }
    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}
isPrimeGame();

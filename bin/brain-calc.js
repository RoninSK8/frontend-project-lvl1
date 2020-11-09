#!/usr/bin/env node
import promptly from 'promptly';

async function calculationGame() {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  let counter = 0;
  while (counter < 3) {
    const randomNumber1 = Math.floor(Math.random() * (100 - 1)) + 1;
    const randomNumber2 = Math.floor(Math.random() * (100 - 1)) + 1;
    const operators = '+-*';
    const randomOperator = operators[Math.floor(Math.random()*operators.length)];
    let rightResult;
    switch (randomOperator) {
      case '+':
        rightResult = randomNumber1 + randomNumber2;
        break;
      case '-':
        rightResult = randomNumber1 - randomNumber2;
        break;
      default:
        rightResult = randomNumber1 * randomNumber2;
        break;
    }
    console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`);
    // eslint-disable-next-line no-await-in-loop
    const answer = await promptly.prompt('Your answer: ');
    if (rightResult === +answer) {
      console.log('Correct!');
      counter += 1;
    } else {
      counter = 0;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightResult}'. \nLet's try again, ${name}!`);
    }
    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
  // const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  // const operators = '+-*';
  // const randomOperator = operators[Math.floor(Math.random()*operators.length)];
  // const randomExpression = '${randomNumber} ${randomOperator} ${randomNumber}';
}
calculationGame();

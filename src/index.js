#!/usr/bin/env node
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
import promptly from 'promptly';

async function game() {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  let scoreCount = 0;
  const scoreToWin = 3;
  while (scoreCount < scoreToWin) {
    const [task, correctAnswer] = generateTaskAndCorrectAnswer();
    console.log(`Question: ${task}`);
    const answer = await promptly.prompt('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
      scoreCount += 1;
    } else {
      scoreCount = 0;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`);
    }
  }
}
export default game;

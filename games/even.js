import promptly from 'promptly';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const task = Math.floor(Math.random() * (100 - 1)) + 1;
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
const correctAnswer = isEven(task);

async function game() {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  let scoreCount = 0;
  const scoreToWin = 3;
  while (scoreCount < scoreToWin) {
    let task;
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

game();

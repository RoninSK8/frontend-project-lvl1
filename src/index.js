import promptly from 'promptly';

async function game(rules, generateTaskAndCorrectAnswer) {
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
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
export default game;

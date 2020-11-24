import promptly from 'promptly';

async function play(rule, generateTaskAndCorrectAnswer) {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(rule);
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
export default play;

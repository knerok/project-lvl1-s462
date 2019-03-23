import readlineSync from 'readline-sync';

const numOfRounds = 3;

const core = (annotation, games) => {
  console.log('Welcome to the Brain Games!');
  console.log(annotation);
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!\n`);
  for (let i = 1; i <= numOfRounds; i += 1) {
    const resultsOfGame = games();
    const question = resultsOfGame[0];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = resultsOfGame[1];
    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${actual}!`);
      return;
    }
  }
  console.log(`Congratulations, ${actual}!`);
};
export default core;

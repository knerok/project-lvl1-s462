import readlineSync from 'readline-sync';

const numOfRounds = 3;

const core = (annotation, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(annotation);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let i = 1; i <= numOfRounds; i += 1) {
    const [question, correctAnswer] = generateGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default core;

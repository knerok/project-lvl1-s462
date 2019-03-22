import readlineSync from 'readline-sync';
import even from './games/even';

const preRes = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!\n`);
  for (let numCorrectAnswers = 1; numCorrectAnswers <= 3; numCorrectAnswers += 1) {
    const resultsOfGame = even();
    const question = resultsOfGame[0];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = resultsOfGame[1];
    if (answer === correctAnswer) {
      console.log('Correct!');
      if (numCorrectAnswers === 3) console.log(`Congratulations, ${actual}!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${actual}!`);
      break;
    }
  }
};

export default preRes;

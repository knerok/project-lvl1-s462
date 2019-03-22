import readlineSync from 'readline-sync';
import calc from './games/calc';

const preRes = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!\n`);
  let correctAnswer = 0;
  let answer = '';
  for (let i = 1; i <= 3; i += 1) {
    correctAnswer = calc();
    answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
      if (i === 3) console.log(`Congratulations, ${actual}!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${actual}!`);
      break;
    }
  }
};
export default preRes;

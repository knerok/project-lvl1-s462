import readlineSync from 'readline-sync';
import gcd from './games/gcd';
import calc from './games/calc';
import even from './games/even';

const selectGame = (set) => {
  if (set === 'gcd') return gcd();
  if (set === 'calc') return calc();
  if (set === 'even') return even();
  return 0;
};

const preRes = (annotation, set) => {
  console.log('Welcome to the Brain Games!');
  console.log(annotation);
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!\n`);
  let correctAnswer = 0;
  let answer = '';
  for (let i = 1; i <= 3; i += 1) {
    correctAnswer = selectGame(set);
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

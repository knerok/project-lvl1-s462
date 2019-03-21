import readlineSync from 'readline-sync';
import plus from './games/plus';
import minus from './games/minus';
import multi from './games/multi';

const preRes = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!\n`);
  let indicator = 1;
  let random1 = 0;
  let random2 = 0;
  let randomSign = 0;
  let sign = '';
  let corAnswer = 0;
  let answer = '';
  while (indicator > 0 && indicator <= 3) {
    random1 = Math.floor(Math.random() * 500000) + (-100000);
    random2 = Math.floor(Math.random() * 500000) + (-100000);
    randomSign = Math.floor(Math.random() * 98) + 1;
    if (randomSign >= 1 && randomSign <= 33) { sign = '+'; corAnswer = plus(random1, random2); }
    if (randomSign >= 34 && randomSign <= 66) { sign = '-'; corAnswer = minus(random1, random2); }
    if (randomSign >= 67 && randomSign <= 99) { sign = '*'; corAnswer = multi(random1, random2); }
    console.log(`Question: ${random1} ${sign} ${random2}`);
    answer = readlineSync.question('Your answer: ');
    if (answer === corAnswer.toString()) {
      console.log('Correct!');
      indicator += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corAnswer}'. \nLet's try again, ${actual}!`);
      indicator = 0;
    }
    if (indicator === 4) console.log(`Congratulations, ${actual}!`);
  }
};
export default preRes;

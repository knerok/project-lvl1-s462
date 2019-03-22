import readlineSync from 'readline-sync';

const generateRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

const isEven = (n) => {
  const p = n < 0 ? n * (-1) : n;
  return p % 2 === 0;
};

const solution = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!\n`);
  let indicator = 0;
  let random = 0;
  let answer = '';
  let correctAnswer = '';
  while (indicator >= 0 && indicator < 3) {
    random = generateRandom(-100000, 100000);
    console.log(`Question: ${random}`);
    answer = readlineSync.question('Your answer: ');
    correctAnswer = isEven(random) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
      indicator += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${actual}!`);
      indicator = -1;
    }
  }
  if (indicator === 3) console.log(`Congratulations, ${actual}!`);
};
export default solution;

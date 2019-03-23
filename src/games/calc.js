import startGame from '../core';
import generateRandom from '../utils';

const annotation = 'What is the result of the expression?\n';

const generateDataGameCalc = () => {
  const random1 = generateRandom(-100000, 100000);
  const random2 = generateRandom(-100000, 100000);
  const signs = ['+', '-', '*'];
  const numberOfSigns = signs.length;
  const randomSign = generateRandom(0, numberOfSigns - 1);
  const question = `${random1} ${signs[randomSign]} ${random2}`;
  let correctAnswer = 0;
  switch (signs[randomSign]) {
    case '-':
      correctAnswer = random1 - random2;
      break;
    case '*':
      correctAnswer = random1 * random2;
      break;
    default:
      correctAnswer = random1 + random2;
      break;
  }
  return [question, correctAnswer];
};

export default () => {
  startGame(annotation, generateDataGameCalc);
};

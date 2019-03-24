import startGame from '../core';
import generateRandom from '../utils';

const annotation = 'What is the result of the expression?';

const signs = ['+', '-', '*'];

const calculateExpression = (random1, random2, sign) => {
  switch (sign) {
    case '-':
      return random1 - random2;
    case '*':
      return random1 * random2;
    default:
      return random1 + random2;
  }
};

const generateGameDataCalc = () => {
  const random1 = generateRandom(-100000, 100000);
  const random2 = generateRandom(-100000, 100000);
  const sign = signs[generateRandom(0, signs.length - 1)];
  const question = `${random1} ${sign} ${random2}`;
  const correctAnswer = calculateExpression(random1, random2, sign).toString();
  return [question, correctAnswer];
};

export default () => {
  startGame(annotation, generateGameDataCalc);
};

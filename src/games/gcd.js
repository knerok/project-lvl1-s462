import startGame from '../core';
import generateRandom from '../utils';

const annotation = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const generateGameDataGcd = () => {
  const random1 = generateRandom(0, 100000);
  const random2 = generateRandom(0, 100000);
  const question = `${random1} ${random2}`;
  const correctAnswer = getGcd(random1, random2).toString();
  return [question, correctAnswer];
};

export default () => {
  startGame(annotation, generateGameDataGcd);
};

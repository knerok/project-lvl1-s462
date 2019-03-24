import startGame from '../core';
import generateRandom from '../utils';

const annotation = 'Find the greatest common divisor of given numbers.\n';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const generateDataGameGcd = () => {
  const random1 = generateRandom(0, 100000);
  const random2 = generateRandom(0, 100000);
  const question = ` ${random1} ${random2}`;
  const correctAnswer = getGcd(random1, random2);
  return [question, correctAnswer];
};

export default () => {
  startGame(annotation, generateDataGameGcd);
};

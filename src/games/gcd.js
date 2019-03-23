import getCore from '../core';
import generateRandom from '../utils';

const annotation = 'Find the greatest common divisor of given numbers.\n';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const getDataGameGcd = () => {
  const random1 = generateRandom(-100000, 100000);
  const random2 = generateRandom(-100000, 100000);
  const question = `${random1} ${random2}`;
  let correctAnswer = 0;
  correctAnswer = getGcd(Math.abs(random1), Math.abs(random2));
  return [question, correctAnswer];
};

const makeLastPreparations = () => getCore(annotation, getDataGameGcd);

export default makeLastPreparations;

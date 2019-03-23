import getCore from '../core';
import generateRandom from '../utils';

const annotation = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = (n) => {
  const p = n < 0 ? n * (-1) : n;
  return p % 2 === 0;
};

const getDataGameEven = () => {
  const random = generateRandom(-100000, 100000);
  const question = `${random}`;
  const correctAnswer = isEven(random) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const makeLastPreparations = () => getCore(annotation, getDataGameEven);

export default makeLastPreparations;

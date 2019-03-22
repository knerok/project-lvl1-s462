import basics from '../core';

const annotation = 'Answer "yes" if number even otherwise answer "no".\n';

const generateRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

const isEven = (n) => {
  const p = n < 0 ? n * (-1) : n;
  return p % 2 === 0;
};

const gameEven = () => {
  const random = generateRandom(-100000, 100000);
  return [`${random}`, (isEven(random) ? 'yes' : 'no')];
};

const lastPreparations = () => basics(annotation, gameEven);

export default lastPreparations;

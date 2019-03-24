import startGame from '../core';
import generateRandom from '../utils';

const annotation = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n <= 1) return false;
  if (n === 2) return true;
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const generateGameDataPrime = () => {
  const question = generateRandom(-100000, 100000);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  startGame(annotation, generateGameDataPrime);
};

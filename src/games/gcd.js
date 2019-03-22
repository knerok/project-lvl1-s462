const generateRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

const nod = (a, b) => {
  if (!b) {
    return a;
  }
  return nod(b, a % b);
};

const calculations = () => {
  let random1 = 0;
  let random2 = 0;
  let correctAnswer = 0;
  random1 = generateRandom(0, 100000);
  random2 = generateRandom(0, 100000);
  correctAnswer = nod(random1, random2);
  console.log(`Question: ${random1} ${random2}`);
  return correctAnswer;
};
export default calculations;

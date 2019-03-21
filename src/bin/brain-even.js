#!/usr/bin/env node
import readlineSync from 'readline-sync';

  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!\n`);
  let indicator = 1;
  let random = 0;
  let answer = '';
  let corAnswer = '';
  while (indicator > 0 && indicator <= 3) {
    random = Math.floor(Math.random() * 500000) + (-100000);
    console.log(`Question: ${random}`);
    answer = readlineSync.question('Your answer: ');
    random = random < 0 ? random * (-1) : random;
    corAnswer = random % 2 === 0 ? 'yes' : 'no';
    if ((answer === corAnswer && random % 2 === 0) || (answer === corAnswer && random % 2 === 1)) {
      console.log('Correct!');
      indicator += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corAnswer}'. \nLet's try again, ${actual}!`);
      indicator = 0;
    }
    if (indicator === 4) console.log(`Congratulations, ${actual}!`);
  }


import readlineSync from 'readline-sync';
export const result = () => {
console.log('Welcome to the Brain Games! \n');
const actual = readlineSync.question('May I have your name? ');
console.log(`Hello, ${actual}!`);
return ;
}
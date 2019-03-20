#!/usr/bin/env node

import readlineSync from 'readline-sync';
export const result = () => {
const actual = readlineSync.question('May I have your name? ');

console.log('Hello, '+actual+'!');
return ;
}
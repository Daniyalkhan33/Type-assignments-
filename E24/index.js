"use strict";
//24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let car = 'civic';
let bike = 'Cd70';
console.log(car === bike);
console.log(car !== bike);
// • Tests using the lower case function
const t1 = 'Hello Dan';
const t2 = 'hello dan';
console.log(t1.toLowerCase() === t2);
console.log(t2.toLowerCase() === t1);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 5;
const num2 = 70;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// • Tests using "and" and "or" operators
const a = 7;
const b = 14;
const c = 24;
console.log(a < b && b < c);
console.log(a < b || b < a);
// • Test whether an item is in a array
// • Test whether an item is not in a array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(1));
console.log(numbers.includes(6));

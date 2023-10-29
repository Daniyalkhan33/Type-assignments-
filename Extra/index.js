"use strict";
// Please complete these questions before the next class and prepare yourself for the live coding activity, as we will be performing it during the session.
// Exercise 1:  Write a program that calculates the area of a rectangle.
// Method 1
let rectangleArea = (len, Width) => {
    return console.log(`Area of a rectangle: ${len * Width}`);
};
rectangleArea(20, 10);
// Method 2
let len = 20;
let wid = 10;
console.log(len * wid);
// Exercise 2: Write a program that takes input and calculates the volume of a cube.
// Method 1
const volumeOfCube = (sideLenght) => {
    console.log(`volumeOfCube ${sideLenght ** 3} `);
};
volumeOfCube(10);
// Method 2
let side = 5;
console.log(`volumeOfCube ${side ** 3}`);
// Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.
const checkNumber = (num) => {
    if (num > 0) {
        console.log(`number is positive ${num}`);
    }
    else if (num < 0) {
        console.log(`number is negative ${num}`);
    }
    else {
        console.log(`number is zero ${num}`);
    }
};
checkNumber(-785);
checkNumber(5);
checkNumber(0);
// Exercise 4:   Write a program that checks if a given number is even or odd.
const checkNum = (nume) => {
    if (nume % 2 === 0) {
        console.log(`number is even ${nume}`);
    }
    else {
        console.log(`number is odd ${nume}`);
    }
};
checkNum(44);
checkNum(677);
// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.
const checkAge = (Age) => {
    if (Age >= 18) {
        console.log(`person is ${Age} and eligible to vote. `);
    }
    else {
        console.log(`person is ${Age} and not eligible to vote. `);
    }
};
checkAge(44);
checkAge(17);
checkAge(15);
checkAge(34);
checkAge(3);
checkAge(2);
// Exercise 6:  Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)
// Method 1
const result = ((10 + 5) * 3 - 2) / (4 % 3) - 7;
console.log(`result is ${result}`);
// Method 2
const result2 = (((10 + 5) * 3 - 2) / (4 % 3) - 7);
console.log(`result is ${result2}`);

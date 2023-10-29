"use strict";
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
const personDetails1 = {
    Name: 'Ali',
    Age: 20,
    Location: 'Lahore'
};
const personDetails2 = {
    Name: 'Rohan',
    Age: 35,
    Location: 'Karachi'
};
const personDetails3 = {
    Name: 'Amir',
    Age: 27,
    Location: 'Islamabad'
};
let list = [];
list.push(personDetails1, personDetails2, personDetails3);
console.log(list);
function displayList(list) {
    for (let i of list) {
        console.log(`
    ${i.Name}
    ${i.Age}
    ${i.Location}
    _____________\n
  `);
    }
}
displayList(list);

"use strict";
const animals = ['dog', 'cat', 'rabbit'];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
for (let i = 0; i < animals.length; i++) {
    if (animals[i] === 'dog') {
        console.log('A dog would make a great pet');
    }
    else if (animals[i] === 'cat') {
        console.log('A cat would make a great pet');
    }
    else if (animals[i] === 'rabbit') {
        console.log('A rabbit would make a great pet');
    }
}
console.log('All of them are lovely pets');

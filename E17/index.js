"use strict";
//17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.friend = void 0;
const E16_1 = require("../E16");
Object.defineProperty(exports, "friend", { enumerable: true, get: function () { return E16_1.friend; } });
console.log(`Sorry ${E16_1.friend[0]}, ${E16_1.friend[1]} , ${E16_1.friend[2]}, ${E16_1.friend[3]}, ${E16_1.friend[4]}, and ${E16_1.friend[5]}, my new dinner table won’t arrive in time for the dinner, so I can make space for only 2 guests.`);
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
console.log(`Sorry ${E16_1.friend[5]}, I cant invite you to dinner.`);
console.log(E16_1.friend.pop());
console.log(`Sorry ${E16_1.friend[4]}, I cant invite you to dinner.`);
console.log(E16_1.friend.pop());
console.log(`Sorry ${E16_1.friend[3]}, I cant invite you to dinner.`);
console.log(E16_1.friend.pop());
console.log(`Sorry ${E16_1.friend[2]}, I cant invite you to dinner.`);
console.log(E16_1.friend.pop());
console.log(E16_1.friend);
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(`${E16_1.friend[0]}, You are still invited.`);
console.log(`${E16_1.friend[1]}, You are still invited.`);
console.log(E16_1.friend);
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log(E16_1.friend.pop());
console.log(E16_1.friend.pop());
console.log(E16_1.friend);

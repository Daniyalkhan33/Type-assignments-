"use strict";
//16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.friend = void 0;
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
const E15_1 = require("../E15");
Object.defineProperty(exports, "friend", { enumerable: true, get: function () { return E15_1.friend; } });
console.log(`Hey ${E15_1.friend[0]}, ${E15_1.friend[1]} and ${E15_1.friend[2]}, we have found a bigger dinner table,so we are inviting more people.`);
// • Add one new guest to the beginning of your array.
console.log(E15_1.friend.unshift('Azhar'));
console.log(E15_1.friend);
// • Add one new guest to the middle of your array. 
console.log(E15_1.friend.splice(2, 0, 'Saad'));
console.log(E15_1.friend);
// • Use append() to add one new guest to the end of your list. 
console.log(E15_1.friend.push('Raza'));
console.log(E15_1.friend);
// • Print a new set of invitation messages, one for each person in your list.
console.log(`Hey ${E15_1.friend[0]}, you are invited to dinner at my place on 17/08/23.`);
console.log(`Hey ${E15_1.friend[1]}, you are invited to dinner at my place on 17/08/23.`);
console.log(`Hey ${E15_1.friend[2]}, you are invited to dinner at my place on 17/08/23.`);
console.log(`Hey ${E15_1.friend[3]}, you are invited to dinner at my place on 17/08/23.`);
console.log(`Hey ${E15_1.friend[4]}, you are invited to dinner at my place on 17/08/23.`);
console.log(`Hey ${E15_1.friend[5]}, you are invited to dinner at my place on 17/08/23.`);

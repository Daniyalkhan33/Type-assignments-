"use strict";
//14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.friend = void 0;
let friend = [
    'Ali',
    'Amir',
    'Ahmed'
];
exports.friend = friend;
// Method 1
console.log('Hey', friend[0], 'you are invited to dinner at my place on 17/08/23.');
console.log('Hey', friend[1], 'you are invited to dinner at my place on 17/08/23.');
console.log('Hey', friend[2], 'you are invited to dinner at my place on 17/08/23.');
// Method 2 (Best Practice)
console.log(`Hey ${friend[0]}, you are invited to dinner at my place on 17/08/23.`);
console.log(`Hey ${friend[1]}, you are invited to dinner at my place on 17/08/23.`);
console.log(`Hey ${friend[2]}, you are invited to dinner at my place on 17/08/23.`);

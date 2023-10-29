//17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

import{friend} from '../E16'

console.log(`Sorry ${friend[0]}, ${friend[1]} , ${friend[2]}, ${friend[3]}, ${friend[4]}, and ${friend[5]}, my new dinner table won’t arrive in time for the dinner, so I can make space for only 2 guests.`)

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

console.log(`Sorry ${friend[5]}, I cant invite you to dinner.`)
console.log(friend.pop())
console.log(`Sorry ${friend[4]}, I cant invite you to dinner.`)
console.log(friend.pop())
console.log(`Sorry ${friend[3]}, I cant invite you to dinner.`)
console.log(friend.pop())
console.log(`Sorry ${friend[2]}, I cant invite you to dinner.`)
console.log(friend.pop())
console.log(friend)

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

console.log(`${friend[0]}, You are still invited.`)
console.log(`${friend[1]}, You are still invited.`)
console.log(friend)

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

console.log(friend.pop())
console.log(friend.pop())
console.log(friend)

export{friend}
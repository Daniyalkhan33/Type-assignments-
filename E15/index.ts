//15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

import{friend} from '../E14';

// Method 1
console.log('Hey',friend[0],'you are invited to dinner at my place on 17/08/23.')
console.log('Hey',friend[1],'you are invited to dinner at my place on 17/08/23.')
console.log('Hey',friend[2],'you are invited to dinner at my place on 17/08/23.')


// // // Method 2 (Best Practice)
console.log(`Hey ${friend[0]}, you are invited to dinner at my place on 17/08/23.`)
console.log(`Hey ${friend[1]}, you are invited to dinner at my place on 17/08/23.`)
console.log(`Hey ${friend[2]}, you are invited to dinner at my place on 17/08/23.`)

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

console.log('Amir')
console.log(friend)
console.log(friend.splice(1,1))
console.log(friend)
console.log(friend.push('Ahad'))
console.log(friend)

// • Print a second set of invitation messages, one for each person who is still in your list.


// Method 1
console.log('Hey',friend[0],'you are invited to dinner at my place on 17/08/23.')
console.log('Hey',friend[1],'you are invited to dinner at my place on 17/08/23.')
console.log('Hey',friend[2],'you are invited to dinner at my place on 17/08/23.')

// // // Method 2 (Best Practice)
console.log(`Hey ${friend[0]}, you are invited to dinner at my place on 17/08/23.`)
console.log(`Hey ${friend[1]}, you are invited to dinner at my place on 17/08/23.`)
console.log(`Hey ${friend[2]}, you are invited to dinner at my place on 17/08/23.`)

export{friend}
//16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

import{friend} from '../E15'

console.log(`Hey ${friend[0]}, ${friend[1]} and ${friend[2]}, we have found a bigger dinner table,so we are inviting more people.`)

// • Add one new guest to the beginning of your array.
console.log(friend.unshift('Azhar'))
console.log(friend)

// • Add one new guest to the middle of your array. 
console.log(friend.splice(2,0,'Saad'))
console.log(friend)
// • Use append() to add one new guest to the end of your list. 
console.log(friend.push('Raza'))
console.log(friend)
// • Print a new set of invitation messages, one for each person in your list.
console.log(`Hey ${friend[0]}, you are invited to dinner at my place on 17/08/23.`)
console.log(`Hey ${friend[1]}, you are invited to dinner at my place on 17/08/23.`)
console.log(`Hey ${friend[2]}, you are invited to dinner at my place on 17/08/23.`)
console.log(`Hey ${friend[3]}, you are invited to dinner at my place on 17/08/23.`)
console.log(`Hey ${friend[4]}, you are invited to dinner at my place on 17/08/23.`)
console.log(`Hey ${friend[5]}, you are invited to dinner at my place on 17/08/23.`)

export{friend}
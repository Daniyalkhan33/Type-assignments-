// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let car:string[] = ['civic', 'corolla', 'hummer', 'quad bike']

// Method 1
console.log('I would love to buy a', car[0])
console.log('I own a',car[1])
console.log('My dad lends me his',car[2],'to drive')
console.log('Somtimes I take my little brothers',car[3],'for a ride')

// Method 2 (Best Practice)
console.log(`I would love to buy a ${car[0]}.`)
console.log(`I own a ${car[1]}.`)
console.log(`My dad lends me his ${car[2]} to drive.`)
console.log(`Somtimes I take my little brothers ${car[3]} for a ride.`)

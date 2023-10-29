// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

  const cities:string[] = [ 
    'Lahore',
    'Islamabad',
    'Karachi',
    'Multan',
    'Rawalpindi'
  ]

// for(let i of cities ){
//   console.log(cities)
// }

// for(let i = 0; i<=4; i++){
//   if(cities[i] !=== 'Islamabad' ){
//     console.log('Searching...')

//   }else(cities[i] === 'Islamabad')
//   console.log('City found!', cities)
//   break;
// }

for(let i = 0; i<=4; i++){
  if('Islamabad' !== cities[i] ){
    console.log('Searching...')

  }else('Islamabad' == cities[i])
  console.log('City found!', cities)
  break;
}


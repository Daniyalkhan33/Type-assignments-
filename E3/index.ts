/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let personName: string = 'Leonardo';
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());

let words:string[] = personName.split("")

let titlecaseName:string = ""

for (let i =0; i< words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase + ""
}

console.log(titlecaseName)
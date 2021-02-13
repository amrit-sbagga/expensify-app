// Object destructuring

// const person = {
//     name : "Amrit",
//     age : 31,
//     location : {
//         city : "Sarangarh",
//         temp : 21
//     }
// };

// //destructuring
// const { name : firstName = 'Anonymous', age } = person;
// const { temp : temperature, city } = person.location;

// //const name = person.name;
// //const age = person.age;

// console.log(`${firstName} is ${age}`);

// if(city && temperature){
//     console.log(`Its ${temperature} in ${city}`);
// }


// const book = {
//     title : "Ego is the Enemy",
//     author : "Ryan Holiday",
//     publisher : {
//         name : 'Penguin'
//     }
// }

// const { publisher } = book;
// const { name : publisherName = "Self-published" } = publisher;

// console.log(publisherName);


// //console.log("destructuring..!!");


// Array destructuring

const address = ['1299 S Juniper Street', 'New York', 'US', '19144'];

const [street, city, state="Michigan"] = address;
//const [, city, state] = address;

console.log(`You are in ${street}`); //address[0]
console.log(`You are in ${city}`); //address[1]
console.log(`You are in ${state}`); //address[2]

const items = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
// Array destructuring for items
const [itemName = "Coffee(cold)", , mediumPrice] = items;

console.log(`Medium ${itemName} price has cost of : ${mediumPrice}`);

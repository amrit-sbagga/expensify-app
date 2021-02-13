const person = {
    name : "Amrit",
    age : 31,
    location : {
        city : "Sarangarh",
        temp : 21
    }
};

//destructuring
const { name : firstName = 'Anonymous', age } = person;
const { temp : temperature, city } = person.location;

//const name = person.name;
//const age = person.age;

console.log(`${firstName} is ${age}`);

if(city && temperature){
    console.log(`Its ${temperature} in ${city}`);
}


const book = {
    title : "Ego is the Enemy",
    author : "Ryan Holiday",
    publisher : {
        name : 'Penguin'
    }
}

const { publisher } = book;
const { name : publisherName = "Self-published" } = publisher;

console.log(publisherName);


//console.log("destructuring..!!");
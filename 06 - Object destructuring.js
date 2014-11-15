//
// Object destructuring
//
let person = { name: 'Kalle Kula', age: 99, gender: 'male'};

// Old way
//let name = person.name;
//let age = person.age;

// ES6 way
let { name, age } = { name: 'Kalle Kula', gender: 'male', age: 99};
console.log(`My name is: ${name}, and I am ${age} years old.`);

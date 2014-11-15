//
// Array destructuring
//
let timeComponents = [13, 48, 25];

// Old way
//let hour = timeComponents[0];
//let min = timeComponents[1];
//let sec = timeComponents[2];

// ES6 way
let [hour, min, sec] = [13, 49, 10];
console.log(`The time is ${hour}:${min}:${sec}`);


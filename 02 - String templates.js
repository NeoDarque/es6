//
// String templates
//
var subject = 'dog';
var adjective = 'happy';

// Old way
console.log('The ' + subject + ' is ' + adjective);

// ES6 way, backticks and ${expression} in string
console.log(`The ${1+2} ${adjective}`);

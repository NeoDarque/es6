//
// Array comprehension
// 
let xs = [11,12,13,14];
let ys = [21,22,23,24];

// use array comprehension to transform arrays, with optional guard clause.
let coordinates = [for(y of ys) for(x of xs) if(x < 12) { x: x*2, y: y}];
console.log(coordinates);

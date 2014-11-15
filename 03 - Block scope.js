//
// var, let & const, block scope
//
var a = 5;
if(true) {
	let a = 10;		// let-keyword is used for block scope

	const b = 20;	// Immutable assignment
	//b = 1+2 		// would fail, b is immutable!
}
console.log(a);		// will output 5, not 10.

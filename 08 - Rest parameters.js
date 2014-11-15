//
// Rest parameters
//
function logValues(part, ...values) {
	console.log(`Logging values for ${part}`);
	//... arrow functions for more compact callbacks...
	//... arrow functions will also not re-bind 'this'...
	values.forEach(x => console.log(x));
}
logValues('Rest', 1, 2, 3, 4, 5, 6, 7);


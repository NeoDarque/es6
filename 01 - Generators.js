//
// Generators 
//
function* fibonacci(maxValue) {
	var previous = 1, current = 1, next;
	while(previous <= maxValue) {
		next = previous + current;
		console.log('Yielding value to next()')
		let a = yield current;

		previous = current, current = next;
	}
	// returning from a generator sets the 'done'-property to true
}

//
// Manual iteration of generator
//
var iterator = fibonacci(20);
while(true) {
	var iteration = iterator.next();
	if(iteration.done)	// done is set if the generator has returned instead of yeilded
		break;
	console.log(iteration.value);
}

//
// "for-of", array iterator
//
for(var num of fibonacci(50)) {
	if(num > 10) break;
	console.log(num);
}

//
// for-of also works with arrays
//
for(var num of [1,2,3,4,5]) {
	console.log(num);
}
//
// Spread parameters
//
function printTime(prefix, hours, minutes, seconds) {
	console.log(`${prefix} ${hours}:${minutes}:${seconds}`);
}

let timeComponents = [13, 52, 59];
printTime('The current time is:', ...timeComponents);


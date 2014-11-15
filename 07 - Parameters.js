//
// Default parameters
//
// parameters can have default values...
// ...and also values that depend on other parameters
function makeBox(width, height = 1, depth = height * 2) {
	return { volume: width * height * depth };
}
console.log(makeBox(10));

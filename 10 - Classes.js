//
// Classes
// 
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	saySomething() {
		console.log("Woohoo!");
	}
}

var person = new Person('Billy', 55);
console.log(person);
person.saySomething();

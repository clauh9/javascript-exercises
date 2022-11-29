const findTheOldest = function (arr) {
	let today = new Date().getFullYear();
	let age = 0;
	let oldest_age = 0;
	let oldest_person;

	arr.forEach((person) => {
		if ("yearOfDeath" in person) {
			age = person.yearOfDeath - person.yearOfBirth;
		} else {
			age = today - person.yearOfBirth;
		}

		if (age > oldest_age) {
			oldest_age = age;
			oldest_person = person;
		}
	});

	return oldest_person;
};

// Do not edit below this line
module.exports = findTheOldest;

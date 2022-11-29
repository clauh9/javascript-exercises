const removeFromArray = function () {
	let myString = arguments[0].join(" "); //convert array into string with no commas

	let stringArray = myString;
	for (let index = 1; index < arguments.length; index++) {
		stringArray = stringArray.replace(arguments[index], "");
	}

	stringArray = stringArray.split(" "); //splits a string into an array
	stringArray = stringArray.filter((e) => e); //Removing empty strings from an array

	let finalArray = [];
	for (let index = 0; index < stringArray.length; index++) {
		//if it is a number
		if (!isNaN(stringArray[index])) {
			finalArray.push(parseInt(stringArray[index]));
		} else {
			finalArray.push(stringArray[index]);
		}
	}
	return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;

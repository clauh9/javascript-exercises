const add = function (x, y) {
	return x + y;
};

const subtract = function (x, y) {
	return x - y;
};

const sum = function (arr) {
	let sum = 0;
	for (let index = 0; index < arr.length; index++) {
		sum = sum + arr[index];
	}
	return sum;
};

const multiply = function (arr) {
	let mult = arr[0];
	for (let index = 1; index < arr.length; index++) {
		mult = mult * arr[index];
	}
	return mult;
};

const power = function (num, power) {
	return Math.pow(num, power);
};

const factorial = function (num) {
	if (num == 0) {
		return 1;
	}
	return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};

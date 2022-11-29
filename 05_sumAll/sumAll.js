const sumAll = function () {
	let num1 = arguments[0];
	let num2 = arguments[1];
	if (
		!Number.isInteger(num1) ||
		!Number.isInteger(num2) ||
		num1 < 0 ||
		num2 < 0
	) {
		return "ERROR";
	} else {
		let sum = 0;

		if (arguments[1] > arguments[0]) {
			for (let index = arguments[0]; index <= arguments[1]; index++) {
				sum = sum + index;
			}
		} else {
			console.log("entrou");
			for (let index = arguments[1]; index <= arguments[0]; index++) {
				sum = sum + index;
			}
		}

		return sum;
	}
};

// Do not edit below this line
module.exports = sumAll;

const fibonacci = function (num) {
	if (parseInt(num) < 0) {
		return "OOPS";
	}
	return getFibonacci(parseInt(num));
};

function getFibonacci(num) {
	if (num == 1 || num == 2) {
		return 1;
	}

	return getFibonacci(num - 1) + getFibonacci(num - 2);
}

// Do not edit below this line
module.exports = fibonacci;

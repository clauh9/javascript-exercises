const convertToCelsius = function (temp) {
	//return ((temp - 32) * (5 / 9)).toFixed(1);
	return Math.round((temp - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (temp) {
	//return (temp * (9 / 5) + 32).toFixed(1);
	return Math.round((temp * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};

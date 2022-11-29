const palindromes = function (str) {
	let filter_str = str.replace(/[!., ]/g, "").toLowerCase();
	let str_to_arr = filter_str.split("");
	let reversed_arr_to_string = str_to_arr.reverse().join("");

	return reversed_arr_to_string == filter_str;
};

// Do not edit below this line
module.exports = palindromes;

const getTheTitles = function (arr) {
	let books = [];
	arr.forEach((book) => {
		books.push(book.title);
	});
	return books;
};

// Do not edit below this line
module.exports = getTheTitles;

let dataFile = "../data/books.json"
let bookObj = require(dataFile)

const getAllBooks = function(req) {
	return bookObj
}

const getBookById = function(req) {
	let book = bookObj[req.params.id]
	if (book) return book
	else req.error = "Book not found"
}

module.exports = {
	getAllBooks,
	getBookById,
}
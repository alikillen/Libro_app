// let dataFile = "../data/books.json"
// let  = require(dataFile)

// sort out naming issues with changes and uncomment the nextID function, changes to model export name?
// check controller and utils files
// check Book and bookinstance naming
// check against expressCRUD lesson

const bookModel = require("../models/book.js")

const getAllBooks = function(req) {
	return Book
}

const getBookById = function(req) {
	let BookInstance = Book[req.params.id]
	if (BookInstance) return BookInstance
	else req.error = "Book not found"
}

const addBook = function(req){
  try {
    const date = Date.now()
    let Book = {
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      published_year: req.body.published_year,
      create_date: date      
    }
    // generate ID for each obj
    // Book[getNextId()]=Book
    return Book
  }
  catch(error){
    console.log(error)
    req.error = error
    return null
  }
}

// function getNextId(){
//   let sortedIds = Object.keys(Book).sort()
//   nextId = (sortedIds.length != 0) ? parseInt(sortedIds[sortedIds.length-1]) + 1 : 1
//   return nextId
// }

module.exports = {
	getAllBooks,
  getBookById,
  addBook
}
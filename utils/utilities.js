// let dataFile = "../data/books.json"
// let  = require(dataFile)

// sort out naming issues with changes and uncomment the nextID function, changes to model export name?
// check controller and utils files
// check Book and bookinstance naming
// check against expressCRUD lesson

// nextID function still causing issues - need to fix

const bookModel = require("../models/book.js")
const { v4: uuidv4 } = require('uuid');

const getAllBooks = function(req) {
	return Book
}
// book is undefined??

// maybe shouldnt use uuid - how can we put id in the req url when its a massive random string
const getBookById = function(req) {
	let BookInstance = Book[req.params.id]
	if (BookInstance) return BookInstance
	else req.error = "Book not found"
}

const addBook = function(req){
  try {
    const date = Date.now()
    let Book = {
      id: uuidv4(),
      // this is needed and it is generating a unique string ID
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      published_year: req.body.published_year,
      create_date: date      
    }
    // generate ID for each obj - this isnt working and returns book is undefined??
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

const deleteBook = function(id){
  if (Object.keys(Book).includes(id)){
    delete Book[id]
  }
  return Book
}

module.exports = {
	getAllBooks,
  getBookById,
  addBook,
  deleteBook
}
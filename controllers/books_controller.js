const {getAllBooks, getBookById, addBook, deleteBook} = require("../utils/utilities")

const getBooks = function (req, res) {
  res.send(getAllBooks(req))
}

const getBook = function (req,res) {
  let Book = getBookById(req)
  if (Book) res.send(Book)
  else {
        res.status(404)
        res.send(req.error)
  }
}

const makeBook = function(req,res){
  let Book = addBook(req)
  if (Book) {
    res.status(201)
    res.send(Book)
  } else {
    res.status(500)
    res.send(`error occured: ${req.error}`)
  }
}

const removeBook = function(req,res){
  let Book = deleteBook(req.params.id)
  res.send(Book)
}

module.exports = {
  getBooks,
  getBook,
  makeBook,
  removeBook
}
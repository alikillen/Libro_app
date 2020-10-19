const {getAllBooks, getBookById, addBook} = require("../utils/utilities")

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

module.exports = {
  getBooks,
  getBook,
  makeBook
}
const Book = require("../models/book.js")
const { v4: uuidv4 } = require('uuid');

const getAllBooks = function(req) {
  return Book.find()
}

const getBookById = function(req) {
  Book.findById(req.params.id)
}

const addBook = function(req){
  let date = Date.now()
  req.body.create_date = date;
  return new Book(req.body);
}   

const deleteBook = function(id){
  return Book.findByIdAndRemove(id)
}

const updateBook = function (req) {
  req.body.create_date = Date.now();
  return Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
};

module.exports = {
	getAllBooks,
  getBookById,
  addBook,
  deleteBook,
  updateBook
}
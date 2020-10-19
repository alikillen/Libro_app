const {getAllBooks, getBookById, addBook, deleteBook, updateBook} = require("../utils/utilities")

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
      // execute the query from deletePost
      deleteBook(req.params.id).exec((err) => {
        if (err) {
            res.status(500);
            return res.json({
                error: err.message
            });
        }
        res.sendStatus(204);

    });
  // let Book = deleteBook(req.params.id)
  // res.send(Book)
}

const changeBook = function (req, res) {
  // execute the query from updateBook
  updateBook(req).exec((err, Book) => {
      if (err) {
          res.status(500);
          return res.json({
              error: err.message
          });
      }
      res.send(Book);
  });
};

module.exports = {
  getBooks,
  getBook,
  makeBook,
  removeBook,
  changeBook
}
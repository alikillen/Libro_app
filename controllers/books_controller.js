const { getAllBooks, getBookById, addBook, deleteBook, updateBook} = require("../utils/utilities")

const getBooks = function (req, res) {
  getAllBooks(req).exec((err, books) => {
    if (err) {
      res.status(500);
      return res.json ({
        error: err.message
      });
    }
    res.send(books);
  })
}

const getBook = function (req,res) {
  getBookById(req).exec((err, x) => {
    if (err) {
      res.status(400);
      return res.send("Book not found");
    }
    res.send(x); 
  });
}

const makeBook = function(req,res){
  addBook(req).save((err, post) => {
    if (err) {
      res.status(500);
      return res.json({ error: err.message });
    }
    res.status(201);
    res.send(post);
    });
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
}

const changeBook = function (req, res) {
  updateBook(req).exec((err, data) => {
      if (err) {
          res.status(500);
          return res.json({
              error: err.message
          });
      }
      res.send(data);
  });
};

module.exports = {
  getBooks,
  getBook,
  makeBook,
  removeBook,
  changeBook
}
const {getAllBooks, getBookById} = require("../utils/utlities")

const getBooks = function (req, res) {
  res.send(getAllBooks(req))
}

const getBook = function (req,res) {
  let book = getBookById(req)
  if (book) res.send(book)
  else {
        res.status(404)
        res.send(req.error)
  }
}

module.exports = {
  getBooks,
  getBook
}
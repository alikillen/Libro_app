const express = require("express")
const router = express.Router()
const { getBooks, getBook, makeBook, removeBook, changeBook } = require("../controllers/books_controller")

// READ
// GET on '/books'
router.get("/", getBooks)
// Returns all books

// READ
// GET on '/posts/:id'
router.get("/:id", getBook)
// Returns book with given id

// CREATE
// POST on '/books/new'
router.post("/new", makeBook)
// Creates a new post

// router.post('/new', function (req, res) {
//   var Body = req.body.params;
//   Book.db.libro_app.insertOne({_id: 1}, {$set:{name:username}}, {new: true}, function(err, Book){
//       if(err){
//           console.log("Something wrong when posting book data!");
//       }
//       console.log(Book);
//   }
//   );




// router.post()

// DELETE
// DELETE on '/books/:id'
router.delete("/:id", removeBook)
// Deletes a post with id

// UPDATE
// PUT on 'posts/:id'
router.put("/:id", changeBook)
// Updates a post with id

module.exports = router
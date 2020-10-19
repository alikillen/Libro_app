const express = require("express")
const bookRouter = express.Router()
const { getBooks, getBook } = require("../controllers/books_controller")

// READ
// GET on '/posts'
router.get("/", getBooks)
// Returns all posts

// READ
// GET on '/posts/:id'
router.get("/:id", getBook)
// Returns post with given id

// CREATE
// POST on '/posts'
// Creates a new post

// DELETE
// DELETE on '/posts/:id'
// Deletes a post with id

// UPDATE
// PUT on 'posts/:id'
// Updates a post with id

module.exports = router
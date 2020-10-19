const express = require("express")
const router = express.Router()
const { getBooks, getBook, makeBook, removeBook } = require("../controllers/books_controller")

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
router.post("/", makeBook)
// Creates a new post

// DELETE
// DELETE on '/posts/:id'
router.delete("/:id", removeBook)
// Deletes a post with id

// UPDATE
// PUT on 'posts/:id'
// Updates a post with id

module.exports = router
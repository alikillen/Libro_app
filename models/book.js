const { interfaces } = require("mocha")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

Book = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  published_year: {
    type: Number,
    required: true,
  },
  create_date: {
    type: Date
  }

})

module.exports = mongoose.model("Book", Book)
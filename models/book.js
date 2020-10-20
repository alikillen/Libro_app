const { interfaces } = require("mocha")
const mongoose = require("mongoose")
const Schema = mongoose.Schema
// import {v4 as uuidv4} from 'uuid'
// set ID here as required string?

// define new schema
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
    type: Date,
    required: true,
  }

})

module.exports = mongoose.model("Book", Book)
// import mongoose and set up schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up book schema
const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: Array
  },
  description: {
    type: String
  },
  link: {
    type: String
  },
  image: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// create Book model using schema
const Book = mongoose.model("Book", bookSchema);

// export model
module.exports = Book;

// import our Book model
const db = require("../models");

module.exports = {
  // find all books
  findAll: function(req, res) {
    db
      .Book
      .find(req.query)
      .sort({date: -1})
      .then(dbBookData => res.json(dbBookData))
      .catch(err => {console.log(err); res.json(err);});
  },
  // find a book by id ("/api/book/:id")
  findById: function (req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbBookData => res.json(dbBookData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  // new book entry (POST)
  create: function (req, res) {
    db.Book
      .create(req.body)
      .then(dbBookData => res.json(dbBookData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  // update book information ("/api/book/:id" => PUT)
  update: function (req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbBookData => res.json(dbBookData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  // to delete a book from the reading list (DELETE)
  remove: function (req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbBookData => dbBookData.remove())
      .then(dbBookData => res.json(dbBookData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  }
}
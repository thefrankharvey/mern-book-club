const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 1
    },
    author: {
      type: String,
      required: true,
      trim: true,
      minLength: 1
    },
    genre: {
      type: String,
      required: true,
      trim: true,
      minLength: 1
    },
    notes: []
  },
  {
    timestamps: true
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

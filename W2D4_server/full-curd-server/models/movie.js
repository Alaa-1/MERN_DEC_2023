// import the mongoose lib
const mongoose = require("mongoose");

// the model

const MoviesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "{PATH} is required"],
      minLength: [3, "{PATH} must be at least 3 characters"],
    },
    image: {
      type: String,
    },
    releaseYear: {
      type: Number,
      required: [true, "please provide a date"],
      min: [1800, "must be valid"],
    },
    seen: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", MoviesSchema);

module.exports = Movie;

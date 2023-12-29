// The controller does the C R U D for the DB

const Movie = require("../models/movie");

// READ ALL
module.exports.findAllMovies = (req, res) => {
  Movie.find()
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => res.json(err));
};

// READ ONE BY ID

module.exports.findOneMovie = (req, res) => {
  Movie.findOne({ _id: req.params.id })
    .then((oneMovie) => {
      res.json(oneMovie);
    })
    .catch((err) => res.json(err));
};

// CREATE

module.exports.createNewMovie = (req, res) => {
  Movie.create(req.body)
    .then((newlyCreatedMovie) => {
      res.json(newlyCreatedMovie);
    })
    .catch((err) => res.json(err));
};

// UPDATE

module.exports.updateExisitingMovie = (req, res) => {
  Movie.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedMovie) => {
      res.json(updatedMovie);
    })
    .catch((err) => res.json(err));
};

// DELETE
module.exports.deleteOneMovie = (req, res) => {
  Movie.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.json(err));
};

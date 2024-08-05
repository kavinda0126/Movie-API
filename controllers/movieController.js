const Movie = require("../models/movieModel");

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    if (!movies) {
      return res.status(404).json({ message: "No movies found" });
    }

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMovieById = async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ message: "No movies found" });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMovie = async (req, res) => {
  try {
    const { title, description, releaseYear, genre,director } = req.body;

    const newMovie = new Movie({
      title,
      description,
      releaseYear,
      genre,
      director,
    });

    await newMovie.save();
    res.status(201).json("Movie created successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMovie = async (req, res) => {
  try {
    const id = req.params.id;

    const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true });

    if (!movie) {
      return res.status(404).json({ message: "No movie found" });
    }
    res.status(200).json("Movie updated successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await Movie.findByIdAndDelete(id);
    if (!movie) {
      return res.status(404).json({ message: "No movie found" });
    }
    res.status(200).json("Movie deleted successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};

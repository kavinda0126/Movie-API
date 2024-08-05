const router = require("express").Router();

const movieController = require("../controllers/movieController");

const watchlistController = require("../controllers/watchlistController");

router.get("/movies", movieController.getAllMovies);

router.post("/movies", movieController.createMovie);

router.get("/movies/:id", movieController.getMovieById);
router.put("/movies/:id", movieController.updateMovie);
router.delete("/movies/:id", movieController.deleteMovie);

router.get("/watchlist", watchlistController.getWatchList);
router.post("/watchlist/:id", watchlistController.addMovieToWatchList);
router.delete("/watchlist/:id", watchlistController.removeMovieFromWatchList);

module.exports = router;

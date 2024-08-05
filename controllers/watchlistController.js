const WatchList = require('../models/watchlistModel');
const Movie = require('../models/movieModel');

const getWatchList = async (req, res) => {
    try {
        const watchlist = await WatchList.find();
        if (!watchlist) {
            return res.status(404).json({ message: "No WatchList" });
        }

        res.status(200).json(watchlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const addMovieToWatchList = async (req, res) => {
    try {
        const id=req.params.id;
        const movie = await Movie.findById(id);

        if (!movie) {
            return res.status(404).json({ message: "No movie found" });
        }

        const watchlist = await WatchList.findOne();
        if (!watchlist) {
            const newWatchList = new WatchList({
                watchlist: [movie]
            });
            await newWatchList.save();
            return res.status(201).json("Movie added to watchlist successfully");
        }
        watchlist.watchlist.push(movie);
        await watchlist.save();


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const removeMovieFromWatchList = async (req, res) => {
    try {
        const id=req.params.id;

        const movie = await Movie.findById(id);
        if (!movie) {
            return res.status(404).json({ message: "No movie found" });
        }

        const watchlist = await WatchList.findOne();
        if (!watchlist) {
            return res.status(404).json({ message: "No watchlist found" });
        }

        const index = watchlist.watchlist.findIndex((movie) => movie._id == id);
        if (index === -1) {
            return res.status(404).json({ message: "No movie found in watchlist" });
        }
        watchlist.watchlist.splice(index, 1);
        await watchlist.save();
        res.status(200).json("Movie removed from watchlist successfully");

    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
}


module.exports = { getWatchList, addMovieToWatchList, removeMovieFromWatchList };



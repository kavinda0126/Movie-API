const mongoose = require("mongoose");
const { watch } = require("./movieModel");

const watchlistSchema = new mongoose.Schema({
   watchlist: {
       type: Array,
       required: true,
       default: []
   }
})

module.exports = mongoose.model("Watchlist", watchlistSchema);


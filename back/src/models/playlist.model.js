const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set("useCreateIndex", true);

const playlistSchema = new Schema({
    id: {
        type: String,
        required=true,
        trim=true
    },
    name: {
        type: String,
        required=true,
        trim=true
    },
    currentSong: {
        type=String,
        required=false,
        trim=true
    },
    songs: {
        type =[String],
        required=false
    }
});

mongoose.exports = playlistSchema;
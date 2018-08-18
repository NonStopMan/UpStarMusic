// Todo: Create Artist Model
import AlbumSchema from './album';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    yearsActive: {
        type: Number,
    },
    image: {
        type: String,
    },
    genre: {
        type: String,
    },
    website: {
        type: String,
    },
    netWorth: {
        type: Number,
    },
    IdealName: {
        type: String,
    },
    retired: {
        type: Boolean,
    },
    artistAlbums: [AlbumSchema]
});

const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;

// Todo: create Album Schema
// Todo: Create Artist Model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    copiesSold: {
        type: Number,
        required: true,
    },
    numberTracks: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    revenue: {
        type: Number,
        required: true,
    },
});

module.exports = AlbumSchema;

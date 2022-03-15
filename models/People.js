///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

///////////////////////////////
// MODELS
////////////////////////////////
const peopleSchema = new Schema({
    name: String,
    image: String,
    title: String,
}, {timestamps: true});

const People = mongoose.model('People', peopleSchema);

module.exports = People;
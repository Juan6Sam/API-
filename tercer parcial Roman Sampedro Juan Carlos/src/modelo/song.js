'use strict'

var mongoose = requiere("mongoose");
var Schema = mongoose.Schema;

var EsquemaSong = Schema({
    numbre:String,
    nombre: String,
    duracion: String,
    file: String,
    album: String,
    song: { type: Schema.ObjectId, ref: "Song" }
});

module.exports = mongoose.model("Song", EsquemaSong);
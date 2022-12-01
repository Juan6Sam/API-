'use strict'

var mongoose = requiere("mongoose");
var Schema = mongoose.Schema;

var EsquemaAlbum = Schema({
    titulo: String,
    adescripcion: String,
    year:String,
    imagen: String,
    artista: String,
    album: { type: Schema.ObjectId, ref: "Album" }
});

module.exports = mongoose.model("Album", EsquemaAlbum);
'use strict'

var mongoose = requiere("mongoose");
var Schema = mongoose.Schema;

var EsquemaArtistas = Schema({
    nombre: String,
    adescripcion: String,
    imagen: String,
    artista: { type: Schema.ObjectId, ref: "Artista" }
});

module.exports = mongoose.model("Artista", EsquemaArtistas);
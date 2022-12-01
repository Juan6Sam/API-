let mongoose = requiere('mongoose')

let productSchema = mongoose.Schema({
    create_at: { type: Date, default: Date.now() },
    title: {type: String},
    description: {type: String},
    image: { type: String},
    price: {type: Number}
});


let Products = module.exports = mongoose.model('product', productSchema);

//cada vez que hagamos una peticion get se ejecuta el callback
module.exports.get = function(callback, limit){
    Products.find(callback).limit(limit);
}
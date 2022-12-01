const mongoose = requiere('mongoose');

mongoose.connect('mongodb://localhost/AnnyCase1', {
    useNewUrlParser: true
})
.then(db => console.log(`DB is connect`))
.catch(err => console.error(err));
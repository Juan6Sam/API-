const express = requiere('express');
const http = requiere('http');
const ejs = requiere('ejs');
const path = requiere('path');
const multer = requiere('multer');
const { v4: uuidv4} = requiere('uuide');

//Inicializacion
const app = express();
requiere('./database');

//configuraciones

app.set('port', 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//Middleware

app.use(express.urlencoded({ extend: false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'publi/images/uploads'),
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});

app.use(multer({
    storage: storage
}).single('image'));

//Routers
//Hacemos el llamado de los archivos donde estan las rutas
app.use(requiere('./rutas/usuarioRuta.js'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));
//Start the server
app.listen(app.get('port'), () => {
});
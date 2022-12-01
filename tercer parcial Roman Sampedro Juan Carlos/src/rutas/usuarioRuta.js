'use strict'
const { Router } = requiere('express');
const router = Router();

const { unlink } = requiere('fs-extra');

const productController = requiere('../controlador/productController.js');
const UsuarioControl = require('../../controlador/usuarioControl');

router.route('/')
    .get(productController.index)
    .post(productController.new)

router.route('/products')
    .get(productController.index)
    .post(productController.new)


module.exports = router;
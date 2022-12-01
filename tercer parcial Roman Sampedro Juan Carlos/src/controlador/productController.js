const { prueba } = require("./usuarioControl");

Product = requiere('../modelo/ProductsModels.js');

exports.index = (req, res) => {
    Product.get((err, data) =>{
        if(err) 
            res.json({
                status: 'err',
                code:500,
                message: err
            });
        
        res.json({ data })
    })
}

//crear la funcion para nuevo producto

exports.new = function(req, res) {
    let product = new Product()
    product.title = req.body.title
    product.description = req.body.description 
    product.filename = "abc";
    product.image = '/images/uploads/' + req.file.filename;
    product.price = req.body.price
    product.save(function(err){
        if (err)
            res.json({
                status: 'err',
                code: 500,
                message: err
            })
        
        res.json({
            status:'success',
            code: 200,
            message: 'Registro guardado',
            data: product
        })
    })
}

//crear funcion vista de productos
exports.view = function(req,res) {
    Product.findById(req.params.id, function(err, product){
        if(err)
            res.json({
                status:'err',
                code: 500,
                message: err
            })
        
        res.json({
            status: 'success',
            code: 200,
            message: 'Registro encontrado',
            data: product

        })
    })
}

exports.update = function(req,res) {
    Product.findById(req.params.id, function(err,product){
        if(err)
            res.json({
                status:'err',
                code: 500,
                message: err
            })
        
        product.name = req.body.name
        product.price = req.body.price
        product.stock = req.body.stock
        product.save(function(err){
            if(err)
                res.json({
                    status: 'err',
                    code: 500,
                    message: err
            })
            res.json({
                status: 'success',
                code: 200,
                message: 'Producto actualizado',
                data: product
            })
        })
    })
}

exports.delete = function(req, res){
    Product.remove({
        _id: req.params.id
    }, function(err){
        if(err)
            res.json({
                status: 'err',
                code: 500,
                message: err
            })
        res.json({
            status: 'success',
            code: 200,
            message: 'Registro elimindado'
        })
    })
}
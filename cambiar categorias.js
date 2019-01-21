db.productos.find({}).forEach( (producto) => {

    var categoriaIndex = 0
    var productoID = ObjectId(producto._id.str)

    producto.categorias.forEach( (categoria) => { 

        var n = db.categorias.count({});
        var r = Math.floor(Math.random() * n);
        var categoriaFind = db.categorias.find({}).limit(1).skip(r);
        var categoriaID = ObjectId(categoriaFind.next()._id.str)
        var column = `categorias.${categoriaIndex}`
        db.productos.update({ _id: productoID }, { $set: { [column]: categoriaID } })
        categoriaIndex++

    } ); 

} );
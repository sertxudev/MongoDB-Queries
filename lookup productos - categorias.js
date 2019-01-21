db.productos.aggregate([
   {
     $lookup:
       {
         from: "categorias",
         localField: "categorias",
         foreignField: "_id",
         as: "categoria"
       }
  }
])
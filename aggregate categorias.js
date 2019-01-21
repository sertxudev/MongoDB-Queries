db.productos.aggregate([
  {
    $lookup:
    {
      from: "categorias",
      let: { pid: "$categorias" },
      pipeline: [
        {
          $match: { $expr: { $in: ["$_id", "$$pid"] } }
        }
      ],
      as: "categoriasObjects"
    }
  }
])
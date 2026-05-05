const Productos = require('../models/Productos');

//Creamos el método de crear Productos
exports.createProductos = async (req,res)=>{
    const producto = await Productos.create(req.body);
    res.json(producto);
};

//Listar Productos
exports.getProductos = async (req,res)=>{
    const productos = await Productos.findAll();
    res.json(productos);
};

//Eliminar productos
exports.deleteProductos = async (req,res)=>{
    const {id}=req.params;
    const producto = await Productos.findByPk(id);
    if(!producto){
        return res.status(404).json({error:'Producto no encontrado'});
    }
    await producto.destroy();
    res.json(producto);
}
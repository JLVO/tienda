const User = require('./User');
const Productos = require('./Productos');
const Categorias = require('./Categorias');

//Categoria tiene muchos productos
Categorias.hasMany(Productos);

//productos pertenece a una categoria
Productos.belongsTo(Categorias);

//Usuario crea productos
User.hasMany(Productos);
Productos.belongsTo(User);

module.exports={User,Productos,Categorias};
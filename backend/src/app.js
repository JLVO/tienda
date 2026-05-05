//archivo principal del servidor
//configurar express
require("dotenv").config();
require("./models")
const express = require('express');
const cors = require('cors');//permitir conectar el frontend con el cakend
const helmet = require('helmet');//seguridad protefer http

//inicializamos la app
const app = express();

//middleware para leer json(APIS)
app.use(express.json());
app.use(cors());//Seguridad básica
app.use(helmet());//seguridad

//rutas
const routes = require('./routes');
const CategoriasRoutes=require('./routes/categoriasRoutes');
const ProductosRoutes=require('./routes/productosRoutes');
app.use('/api',routes);
app.use('/api/categorias',CategoriasRoutes);
app.use('/api/productos',ProductosRoutes);

//Ruta de prueba
app.get('/', (req,res)=>{
    res.send("API funcionando");
});

//Para usar en el server.js
module.exports = app;
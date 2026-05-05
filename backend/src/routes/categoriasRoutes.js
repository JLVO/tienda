const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const {createCategorias, getCategorias}=
require('../controllers/categoriasController');

//Creamos la categoria
router.post("/",auth,createCategorias);

//Listar las categorias
router.get("/",getCategorias);

module.exports = router;
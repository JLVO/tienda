const express=require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const {
    createProductos,
    getProductos,
    deleteProductos
}=require('../controllers/productController');

//CRUD COMPLETO
router.post("/",auth,createProductos);
router.get("/",getProductos);
router.delete("/:id",deleteProductos);

module.exports = router;
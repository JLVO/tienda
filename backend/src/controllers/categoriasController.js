const{Categorias}=require('../models');
console.log("debug categorias", Categorias);

//Crear Categorias
exports.createCategorias = async (req,res)=>{
    try{
    const categoria = await Categorias.create(req.body);
    res.json(categoria);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
};

//Listar Categorias 
exports.getCategorias = async (req,res)=>{
    try{
    const categoria = await Categorias.findAll();
    res.json(categoria);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
};


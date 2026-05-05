//Registro de usuarios
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req,res)=>{
    try{
        const{username,nombre, apellidos,email,password,rol,estado}=req.body;
        //encriptamos contraseña
        const hashPassword = await bcrypt.hash(password,10);
        //crear usuario
        const user = await User.create({
            username,
            nombre,
            apellidos,
            email,
            password:hashPassword,
            rol,
            estado
        });
        res.json({message: "Usuario Creado correctamente"});
    }catch(error){
        console.log(error);
        res.status(500).json({error:"Error al registrar"},error.message);
    }
    };
    //Login
    exports.login = async (req,res)=>{
        try{
            const {username, password}=req.body;
            const user = await User.findOne({where:{username}});

            if(!user){
                return res.status(404).json({error:'Usuario no encontrado'});
            }

            //Validamos contraseña
            const valid = await bcrypt.compare(password,user.password);
            if(!valid){
                return res.status(401).json({error:'Contraseña incorrecta'});
            }
            
            //generar token
            const token = jwt.sign(
                {id:user.id},
                "secreto",
                {expiresIn:'1h'}
            );
            res.json({token});
        }catch(error){
            res.status(500).json({error:"Error en el login"},error.message);
        }
    };
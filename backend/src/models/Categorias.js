const {DataTypes}=require('sequelize');
const sequelize = require('../config/database');

const Categorias = sequelize.define('Categorias',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    estado:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true,
    }
});
module.exports = Categorias;
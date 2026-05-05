const {DataTypes} = require('sequelize');
const sequelize = require('../config/database')

const Productos =sequelize.define('Productos',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
        },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    precio:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    stock:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    imagen:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    estado:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true,
    }

});
module.exports = Productos;
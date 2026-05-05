const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

//Definimos modelo de usuarios
const User = sequelize.define('User',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    apellidos:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    rol:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'user',
    },
    estado:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true,
    }
});

module.exports = User;
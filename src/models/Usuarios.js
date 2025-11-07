const { DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Usuarios = sequelize.define('Usuarios', {
   id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
    },
   nome: {
         type: DataTypes.STRING,
         allowNull: false,
    },
    usuario: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
    },
    senha: {
         type: DataTypes.STRING,
         allowNull: false,
    },
},{
    tableName: 'usuarios',
    timestamps: false,
});

module.exports = Usuarios;
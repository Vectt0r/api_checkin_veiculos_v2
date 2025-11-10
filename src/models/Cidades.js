const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

const Cidades = sequelize.define('Cidades', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    tableName: 'cidades',
    timestamps: false,
});

module.exports = Cidades;
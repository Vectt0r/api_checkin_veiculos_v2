const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');
const Usuarios = require('./Usuarios');
const Cidades = require('./Cidades');

const Enderecos = sequelize.define('Enderecos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_pessoa: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_cidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rua: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    tableName: 'enderecos',
    timestamps: false,
});

Enderecos.hasOne(Usuarios, { foreignKey: 'id_pessoa', as: 'usuarios' });
Enderecos.hasOne(Cidades, { foreignKey: 'id_cidade', as: 'cidades' });

module.exports = Enderecos;
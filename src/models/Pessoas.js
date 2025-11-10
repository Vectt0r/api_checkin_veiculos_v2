const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/Database');
const Usuarios = require('./Usuarios');

const Pessoas = sequelize.define('Pessoas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_completo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    setor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    tableName: 'pessoas',
    timestamps: false,
});

Pessoas.hasOne(Usuarios, { foreignKey: 'id_pessoa', as: 'usuarios' });

module.exports = Pessoas;
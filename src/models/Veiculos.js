const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

const Veiculos = sequelize.define('Veiculos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_tipo_veiculo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    peso_tara: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ano_fabricacao: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    peso: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    pbt: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    numero_eixos: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    renavam: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    pais_registro: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, {
    tableName: 'veiculos',
    timestamps: false,
});

module.exports = Veiculos;
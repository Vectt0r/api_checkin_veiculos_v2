const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

const TiposVeiculos = sequelize.define('TiposVeiculos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descricao_tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    tableName: 'tipos_veiculos',
    timestamps: false,
});
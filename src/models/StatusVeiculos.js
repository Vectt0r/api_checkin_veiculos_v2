const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

const StatusVeiculos = sequelize.define('StatusVeiculos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descricao_status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    tableName: 'status_veiculos',
    timestamps: false,
});
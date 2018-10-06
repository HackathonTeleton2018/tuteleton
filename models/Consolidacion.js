/* jshint node: true */
'use strict';

const SOURCE = 'tuteleton:models:Consolidacion';
const debug = require('debug')(SOURCE);

module.exports = (sequelize, Sequelize) => {
    const Consolidacion = sequelize.define('Consolidacion', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        origen: {
            type: Sequelize.ENUM('Banamex', 'Farmacias del Ahorro', 'Soriana', 'Telcel', 'Telecomm', 'Infinitum', 'Telmex'),
            allowNull: false
        },
        donacionUnitaria: {
            fieldName: 'donacion_unitaria',
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        donacionMultiple: {
            fieldName: 'donacion_multiple',
            type: Sequelize.INTEGER,
            allowNull: true
        },
        fecha: {
            type: Sequelize.DATEONLY,
            allowNull: true
        },
        donativo: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        estado: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    });

    return Consolidacion;
};
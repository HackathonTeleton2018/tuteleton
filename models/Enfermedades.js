/* jshint node: true */
'use strict';

const SOURCE = 'tuteleton:models:Enfermedades';
const debug = require('debug')(SOURCE);
const _ = require('lodash');

module.exports = (sequelize, Sequelize) => {
    const Enfermedades = sequelize.define('Enfermedades', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.TEXT,
            allowNull: false,
            unique: true
        },
        descripcion: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        otros: {
            type: Sequelize.JSON,
            allowNull: true
        }
    }, {
        tableName: 'enfermedades',
        underscored: true
    });

    return Enfermedades;
};
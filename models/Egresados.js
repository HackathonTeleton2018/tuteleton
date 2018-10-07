/* jshint node: true */
'use strict';

const SOURCE = 'tuteleton:models:Egresados';
const debug = require('debug')(SOURCE);
const _ = require('lodash');

module.exports = (sequelize, Sequelize) => {
    const Egresados = sequelize.define('Egresados', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        noPaciente: {
            field: 'no_paciente',
            type: Sequelize.TEXT,
            allowNull: false
        },
        nombre: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        edad: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        enfermedad: {
            type: Sequelize.TEXT,
            allowNull: false,
            references: {
                model: 'enfermedades',
                key: 'nombre'
            }
        },
        logros: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        testimonio: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'egresados',
        underscored: true
    });

    return Egresados;
};
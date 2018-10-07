/* jshint node: true */
'use strict';

const SOURCE = 'tuteleton:models:Consolidacion';
const debug = require('debug')(SOURCE);
const _ = require('lodash');

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
            field: 'donacion_unitaria',
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        donacionMultiple: {
            field: 'donacion_multiple',
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
    }, {
        tableName: 'consolidacion',
        underscored: true
    });

    Consolidacion.infoDonacion = (params = {}) => {
        return Consolidacion.findAll(params);
    };

    Consolidacion.agregarDonativos = (donativos = []) => {
        return Consolidacion.bulkCreate(donativos)
    }

    Consolidacion.contarDonativos = (params = {}) => {
        return Consolidacion.sum('donativo', params);
    };

    Consolidacion.contarDonantes = (params = {}) => {
        return Consolidacion.findAll({
                attributes: ['donacionUnitaria', 'donacionMultiple']
            })
            .then(datos => {
                let total = 0;
                _.each(datos, dato => {
                    if (dato.donacionUnitaria) total++;
                    else total += dato.donacionMultiple;
                });
                return total;
            });
    };

    return Consolidacion;
};
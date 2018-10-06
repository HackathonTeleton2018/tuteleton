/* jshint node: true */
'use strict';

const SOURCE = 'tuteleton:models:Metadata';
const debug = require('debug')(SOURCE);
const _ = require('lodash');

module.exports = (sequelize, Sequelize) => {
    const Metadata = sequelize.define('Metadata', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        crit: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        recursosNecesarios: {
            field: 'recursos_necesarios',
            type: Sequelize.FLOAT,
            allowNull: false
        },
        ingresosComprometidos: {
            field: 'ingresos_comprometidos',
            type: Sequelize.FLOAT,
            allowNull: false
        },
        porcentajeCumplimiento: {
            field: 'porcentaje_cumplimiento',
            type: Sequelize.FLOAT,
            allowNull: false
        },
        ingresosEsperados: {
            field: 'ingresos_esperados',
            type: Sequelize.FLOAT,
            allowNull: false
        },
        minimoNecesario: {
            field: 'minimo_necesario',
            type: Sequelize.FLOAT,
            allowNull: false
        },
        capacidadMaxima: {
            field: 'capacidad_maxima',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        costoAnualPromedio: {
            field: 'costo_anual_promedio',
            type: Sequelize.FLOAT,
            allowNull: false
        },
        capacidadActual: {
            field: 'capacidad_actual',
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'metadata',
        underscored: true
    });

    Metadata.contarPacientesActuales = (params = {}) => {
        return Metadata.sum('capacidadActual', params)
            .then(total => {
                return total;
            });
    };

    return Metadata;
};
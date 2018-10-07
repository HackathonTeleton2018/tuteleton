/* jshint node: true */
'use strict';

const SOURCE = 'tuteleton:models:Metadata';
const debug = require('debug')(SOURCE);
const _ = require('lodash');

const roundToTwo = number => {
    return +(Math.round(number + "e+2") + "e-2");
};

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

    Metadata.contarPacientesMaximo = (params = {}) => {
        return Metadata.sum('capacidadMaxima', params);
    };

    Metadata.calculosPacientes = (params = {}) => {
        return Promise.all([
                Metadata.contarPacientesActuales(),
                Metadata.contarPacientesMaximo()
            ])
            .then(results => {
                let [actuales, maximo] = results;
                let porcentajeOcupacion = roundToTwo((actuales / maximo) * 100);
                let x = {
                    actuales: actuales,
                    maximo: maximo,
                    porcentajeOcupacion: porcentajeOcupacion
                };
                return x;
            });
    };

    Metadata.contarMontoMinimoTotal = (params = {}) => {
        return Metadata.sum('minimoNecesario', params);
    };

    Metadata.randomCrit = () => {
        return Metadata.findOne({
            attributes: ['crit', 'minimoNecesario', 'capacidadActual', 'costoAnualPromedio'],
            order: [
                sequelize.fn('random')
            ],
            raw: true
        });
    };

    Metadata.obtenerCrits = () => {
        return Metadata.findAll({
                raw: true
            });
    };

    return Metadata;
};
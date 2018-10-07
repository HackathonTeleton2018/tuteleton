/* jshint node: true */
'use strict';

const SOURCE = 'tuteleton:models:Enfermedades';
const debug = require('debug')(SOURCE);
const _ = require('lodash');
let Egresados;
let Pacientes;

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

    Enfermedades.associate = models => {
        Egresados = models.Egresados;
        Pacientes = models.Pacientes;
    };

    Enfermedades.info = () => {
        return Enfermedades.findAll({
                attributes: ['nombre', 'descripcion', 'otros'],
                where: {
                    descripcion: {
                        $ne: null
                    }
                },
                raw: true
            })
            .then(enfermedades => {
                let enfermedadesComplemento = _.map(enfermedades, enfermedad => {
                    return Promise.all([
                            Egresados.count({
                                where: {
                                    enfermedad: enfermedad.nombre
                                }
                            }),
                            Pacientes.count({
                                where: {
                                    enfermedad: enfermedad.nombre
                                }
                            })
                        ])
                        .then(results => {
                            enfermedad.egresados = results[0];
                            enfermedad.pacientes = results[1];
                            return enfermedad;
                        });
                });
                return Promise.all(enfermedadesComplemento)
                    .then(x => {
                        return x;
                    });
            });
    };

    return Enfermedades;
};
/* jshint node: true */
'use strict';

const SOURCE = 'tuteleton:models:Pacientes';
const debug = require('debug')(SOURCE);
const _ = require('lodash');

module.exports = (sequelize, Sequelize) => {
    const Pacientes = sequelize.define('Pacientes', {
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
                model: 'pacientes',
                key: 'nombre'
            }
        }
    }, {
        tableName: 'pacientes',
        underscored: true
    });

    Pacientes.mayorAfectaciones = () => {
        return Pacientes.sequelize.query(
            `select * from (select enfermedad, count(id) as total from pacientes group by enfermedad) as e
            where e.total >= 10
            order by e.total desc;`
        );
    };

    return Pacientes;
};
/* jshint node: true */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('metadata', {
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
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
        field: 'updated_at'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('metadata');
  }
};
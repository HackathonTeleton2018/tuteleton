/* jshint node: true */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('egresados', {
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
    return queryInterface.dropTable('egresados');
  }
};
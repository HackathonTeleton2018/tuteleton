/* jshint node: true */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('consolidacion', {
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
    return queryInterface.dropTable('consolidacion');
  }
};

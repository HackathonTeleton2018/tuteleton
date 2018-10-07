/* jshint node: true */
'use strict';

const SOURCE = 'tuteleton:models';
const debug = require('debug')(SOURCE);
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const _ = require('lodash');

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    debug(`Cargando modelo ${file}`);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Pacientes.mayorAfectaciones()
  .then(pacientes => {
    let x = _.map(pacientes[0], paciente => {
      return Promise.all([
          db.Egresados.findOne({
            where: {
              enfermedad: paciente.enfermedad
            }
          }),
          db.Egresados.count({
            where: {
              enfermedad: paciente.enfermedad
            }
          })
        ])
        .then(results => {
          let [egresado, total] = results;
          if (!egresado) return null;
          paciente.nombreEgresado = egresado.nombre;
          paciente.logros = egresado.logros;
          paciente.testimonio = egresado.testimonio;
          paciente.totalEgresados = total;
          return paciente;
        });
    });
    return Promise.all(x)
      .then(informacion => {
        global.informacion = _.compact(informacion);
      });
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
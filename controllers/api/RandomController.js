/* jshint node: true */
'use strict';

const SOURCE = 'tuteleton:controllers:api:RandomController';
const debug = require('debug')(SOURCE);
const models = require('../../models');
const Metadata = models.Metadata;
const Consolidacion = models.Consolidacion;
const Enfermedades = models.Enfermedades;
const Pacientes = models.Pacientes;
const ErrorController = require('../ErrorController');
const _ = require('lodash');

const roundToTwo = number => {
    return +(Math.round(number + "e+2") + "e-2");
};

const obtenerPorcentaje = (don = false) => {
    return Promise.all([
            Metadata.contarMontoMinimoTotal(),
            Consolidacion.contarDonativos()
        ])
        .then(results => {
            let [minimoTotal, donativos] = results;
            let porcentaje = roundToTwo((donativos * 100 / minimoTotal) * 100);
            if (don) return [porcentaje, donativos];
            return porcentaje;
        });
};

module.exports = {
    general: (req, res, next) => {
        return obtenerPorcentaje(true)
            .then(results => {
                let [porcentaje, donativos] = results;
                return res.json({
                    porcentaje: porcentaje,
                    donativos: donativos
                });
            })
            .catch(err => {
                let error = new ErrorController(req, res, {
                    source: `${SOURCE}#general`,
                    err: err
                });
                return error.serverError();
            });
    },
    crit: (req, res, next) => {
        return Promise.all([
                obtenerPorcentaje(),
                Metadata.randomCrit()
            ])
            .then(results => {
                let [porcentaje, crit] = results;
                let minimoCrit = crit.minimoNecesario;
                let actualParaCrit = roundToTwo(minimoCrit * (porcentaje / 100));
                let nombre = crit.crit;
                let pacientes = crit.capacidadActual;
                let costoPaciente = crit.costoAnualPromedio;
                let beneficiados = roundToTwo(actualParaCrit / costoPaciente);
                return res.json({
                    nombre: nombre,
                    pacientes: pacientes,
                    montoDestinado: actualParaCrit,
                    beneficiados: beneficiados,
                    porcentajeBeneficiados: roundToTwo((beneficiados * 100 / pacientes))
                });
            })
            .catch(err => {
                let error = new ErrorController(req, res, {
                    source: `${SOURCE}#crit`,
                    err: err
                });
                return error.serverError();
            });
    },
    enfermedad: (req, res, next) => {
        let randomEnfermedad = global.informacion[_.random(0, global.informacion.length)];
        return res.json(randomEnfermedad);
    }
};
/* jshint node: true */
'use strict';

const SOURCE = 'tuteleton:controllers:api:RandomController';
const debug = require('debug')(SOURCE);
const models = require('../../models');
const Enfermedades = models.Enfermedades;
const Metadata = models.Metadata;
const Consolidacion = models.Consolidacion;
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
            let porcentaje = (donativos / minimoTotal);

            if (don) return [porcentaje, donativos, minimoTotal];
            return porcentaje;
        });
};

module.exports = {
    index: (req, res, next) => {
        return Enfermedades.info()
            .then(results => {
                return res.json({
                    enfermedades: results
                });
            })
            .catch(err => {
                let error = new ErrorController(req, res, {
                    source: SOURCE,
                    err: err
                });
                error.serverError();
            });
    },
    crit: (req, res, next) => {
        return Promise.all([
                Metadata.obtenerCrits(),
                obtenerPorcentaje()
            ])
            .then(results => {
                let [crits, porcentaje] = results;
                let x = _.map(crits, crit => {
                    return {
                        nombre: crit.crit,
                        beneficiados: roundToTwo((crit.capacidadActual * porcentaje)),
                        porcentaje: roundToTwo(porcentaje * 100),
                        costoPaciente: crit.costoAnualPromedio,
                        costoMaxOperaciones: roundToTwo(crit.costoAnualPromedio * crit.capacidadMaxima),
                        pacientesMaximo: crit.capacidadMaxima
                    };
                });
                return res.json({
                    crits: x
                });
            });
    },
    donativos: (req, res, next) => {
        let params = req.body;
        params.raw = true;

        return Consolidacion.infoDonacion()
            .then(data => {
                return res.json(data);
            });
    }
};
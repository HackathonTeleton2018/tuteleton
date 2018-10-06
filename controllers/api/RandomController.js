/* jshint node: true */
'use strict';

const SOURCE = 'tuteleton:controllers:api:RandomController';
const debug = require('debug')(SOURCE);
const models = require('../../models');
const Metadata = models.Metadata;
const Consolidacion = models.Consolidacion;
const ErrorController = require('../ErrorController');

module.exports = {
    general: (req, res, next) => {
        return Promise.all([
                Metadata.sum('minimoNecesario'),
                Consolidacion.sum('donativo')
            ])
            .then(results => {
                let [minimoTotal, donativos] = results;
                let porcentaje = +(Math.round((((donativos * 100) / minimoTotal) * 100) + "e+2") + "e-2");
                return res.json({
                    porcentaje: porcentaje
                });
            })
            .catch(err => {
                let error = new ErrorController(req, res, {
                    source: `${SOURCE}#general`,
                    err: err
                });
                return error.serverError();
            });
    }
};
/* jshint node: true */
'use strict';

const SOURCE = 'tuteleton:controllers:api:RandomController';
const debug = require('debug')(SOURCE);
const models = require('../../models');
const Enfermedades = models.Enfermedades;
const ErrorController = require('../ErrorController');
const _ = require('lodash');


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
    }
};